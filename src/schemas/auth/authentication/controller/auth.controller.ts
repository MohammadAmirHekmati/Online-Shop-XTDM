import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Put, Query} from "@nestjs/common";
import {AuthService} from "../services/auth.service";
import {LoginDto} from "../dto/login.dto";
import {CheckOtpDto} from "../dto/check-otp.dto";
import {SetPasswordDto} from "../dto/set-password.dto";
import {ForgetPasswordCheckOtpDto} from "../dto/forget-password-check-otp.dto";
import {ChangePasswordDto} from "../dto/change-password.dto";

@ApiTags("[AUTH]")
@Controller("auth")
export class AuthController {
    constructor(private authService:AuthService) {
    }

    @Get("send/otp")
    async sendOtp(@Query("mobile") mobile:string) {
        return this.authService.sendOtp(mobile)
    }

    @Put("login")
    async login(@Body() loginDto:LoginDto) {
        return this.authService.login(loginDto)
    }

    @Put("check/otp")
    async checkOtp(@Body() checkOtpDto:CheckOtpDto) {
        return this.authService.checkOtp(checkOtpDto)
    }

    @Put("set/password")
    async setPassword(@Body() setPasswordDto:SetPasswordDto) {
    return this.authService.setPassword(setPasswordDto)
    }

    @Get("forget/password/send/otp")
    async forgetPasswordSendOtp(@Query("mobile") mobile:string) {
        return this.authService.forgetPasswordSendOtp(mobile)
    }

    @Put("forget/password/check/otp")
    async forgetPasswordCheckOtp(@Body() forgetPasswordCheckOtpDto:ForgetPasswordCheckOtpDto) {
    return await this.authService.forgetPasswordCheckOtp(forgetPasswordCheckOtpDto)
    }

    @Put("change/password")
    async changePassword(@Body() changePasswordDto:ChangePasswordDto) {
    return await this.authService.changePassword(changePasswordDto)
    }
}