import {BadRequestException, Injectable} from "@nestjs/common";
import {UserService} from "../../user/services/user.service";
import {SmsService} from "../../../../utility/sms/sms.service";
import {RedisService} from "../../../../common/redis/redis.service";
import {LoginDto} from "../dto/login.dto";
import * as process from "process";
import {CheckOtpDto} from "../dto/check-otp.dto";
import {SetPasswordDto} from "../dto/set-password.dto";
import {CreateUserDto} from "../../user/dto/create-user.dto";
import { sha256 } from "js-sha256";
import {JwtService} from "@nestjs/jwt";
import {GenerateTokenDto} from "../dto/generate-token.dto";
import {ForgetPasswordCheckOtpDto} from "../dto/forget-password-check-otp.dto";
import {ChangePasswordDto} from "../dto/change-password.dto";


@Injectable()
export class AuthService {
    constructor(private userService:UserService,
                private smsService:SmsService,
                private redisService:RedisService,
                private jwtService:JwtService) {
    }

    TEMP_LOGIN_REQUEST="TEMP_LOGIN_REQUEST_"
    TEMP_REGISTER_OTP_REQUEST="TEMP_REGISTER_OTP_REQUEST_"
    TEMP_REGISTER_PASSWORD_REQUEST="TEMP_REGISTER_PASSWORD_REQUEST_"
    TEMP_SEND_OTP_FORGET_PASSWORD="TEMP_SEND_OTP_FORGET_PASSWORD_"
    TEMP_CHANGE_PASSWORD="TEMP_CHANGE_PASSWORD_"
    async sendOtp(mobile:string){
        const findUser=await this.userService.findUserByMobile(mobile)
        if (findUser)
        {
            await this.redisService.setKey(`${this.TEMP_LOGIN_REQUEST}${mobile}`,mobile,120)
            return true
        }

        if (!findUser)
        {
            const otpCode=this.generateRandomOtp()
            await this.smsService.sendOtp([otpCode],mobile,process.env.SMS_TEMPLATE)
            await this.redisService.setKey(`${this.TEMP_REGISTER_OTP_REQUEST}${mobile}`,otpCode,120)
            return false
        }
    }

    async login(loginDto:LoginDto){
        const findUser=await this.userService.findUserByMobile(loginDto.mobile)
        if (findUser.password!==sha256(loginDto.password))
            throw new BadRequestException("پسورد اشتباه است")

        return this.generateJwtToken({roles:findUser.roles,userId:findUser.id},loginDto.rememberMe)
    }

    async checkOtp(checkOtpDto:CheckOtpDto){
        const getKey=await this.redisService.getKey(`${this.TEMP_REGISTER_OTP_REQUEST}${checkOtpDto.mobile}`)
        if (!getKey)
            throw new BadRequestException("مدت زمان کد اعتبار سنجی شما به پایان رسیده")

        if(getKey!==checkOtpDto.otpCode)
            throw new BadRequestException("کد وارد شده با کد ارسالی مطابقت ندارد")

        await this.redisService.setKey(`${this.TEMP_REGISTER_PASSWORD_REQUEST}${checkOtpDto.mobile}`,checkOtpDto.mobile,120)
        return true
    }

    async setPassword(setPasswordDto:SetPasswordDto){
        const getTemp=await this.redisService.getKey(`${this.TEMP_REGISTER_PASSWORD_REQUEST}${setPasswordDto.mobile}`)
        if (!getTemp)
            throw new BadRequestException()

        const createUserDto:CreateUserDto={
            password:sha256(setPasswordDto.password),
            mobile:setPasswordDto.mobile
        }
        const createUser=await this.userService.createEntity(createUserDto)
        console.log(this.generateJwtToken({roles:createUser.roles,userId:createUser.id},setPasswordDto.rememberMe))
        return this.generateJwtToken({roles:createUser.roles,userId:createUser.id},setPasswordDto.rememberMe)
    }

    generateRandomOtp(){
        const randomInt=Math.floor(Math.random()*(99999 - 11111 + 1)) + 11111
        return randomInt.toString()
    }

    generateJwtToken(generateTokenDto:GenerateTokenDto,rememberMe:boolean){
        if (rememberMe)
            return this.jwtService.sign(generateTokenDto,{expiresIn:"7d"})

        if (!rememberMe)
            return this.jwtService.sign(generateTokenDto,{expiresIn:"12h"})

    }

    async forgetPasswordSendOtp(mobile:string){
        const findUser=await this.userService.findUserByMobile(mobile)
        if (!findUser)
            throw new BadRequestException("کاربر وجود ندارد")

        const generatedCode=this.generateRandomOtp()
        await this.smsService.sendOtp([generatedCode],mobile,process.env.SMS_TEMPLATE)
        const setOtpAndUserId={
            userId:findUser.id,
            otpCode:generatedCode
        }
        await this.redisService.setKey(`${this.TEMP_SEND_OTP_FORGET_PASSWORD}${mobile}`,JSON.stringify(setOtpAndUserId),120)

    }

    async forgetPasswordCheckOtp(forgetPasswordCheckOtpDto:ForgetPasswordCheckOtpDto){
        const getKey=await this.redisService.getKey(`${this.TEMP_SEND_OTP_FORGET_PASSWORD}${forgetPasswordCheckOtpDto.mobile}`)
        if (!getKey)
            throw new BadRequestException("زمان درخواست شما به پپایان رسیده است")

        if (JSON.parse(getKey).otpCode!==forgetPasswordCheckOtpDto.otpCode)
            throw new BadRequestException("کد وارد شده اشتباه است")

        await this.redisService.setKey(`${this.TEMP_CHANGE_PASSWORD}${forgetPasswordCheckOtpDto.mobile}`,JSON.parse(getKey).userId,120)
    }

    async changePassword(changePasswordDto:ChangePasswordDto){
        const getKey=await this.redisService.getKey(`${this.TEMP_CHANGE_PASSWORD}${changePasswordDto.mobile}`)
        if (!getKey)
            throw new BadRequestException("شما درخواست تغییر پسورد نداده اید")

       return  await this.userService.updatePassword(getKey,changePasswordDto.password)
    }
}