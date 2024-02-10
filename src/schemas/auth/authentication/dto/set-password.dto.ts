import {ApiProperty} from "@nestjs/swagger";

export class SetPasswordDto {
    @ApiProperty()
    mobile:string

    @ApiProperty()
    password:string

    @ApiProperty()
    rememberMe:boolean
}