import {ApiProperty} from "@nestjs/swagger";

export class UpdateProfileDto {
    @ApiProperty()
    nationalCode:string

    @ApiProperty()
    firstName:string

    @ApiProperty()
    lastName:string
}