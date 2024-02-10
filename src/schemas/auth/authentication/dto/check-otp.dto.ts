import {ApiProperty} from "@nestjs/swagger";

export class CheckOtpDto {
    @ApiProperty()
    mobile:string

    @ApiProperty()
    otpCode:string
}