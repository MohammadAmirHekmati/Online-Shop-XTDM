import {ApiProperty} from "@nestjs/swagger";

export class ChangePasswordDto {
    @ApiProperty()
    mobile:string

    @ApiProperty()
    password:string
}