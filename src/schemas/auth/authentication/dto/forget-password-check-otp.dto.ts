import {ApiProperty} from "@nestjs/swagger";

export class ForgetPasswordCheckOtpDto {
    @ApiProperty()
    mobile:string

    @ApiProperty()
    otpCode:string
}