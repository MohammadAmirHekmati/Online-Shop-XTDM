import {ApiProperty} from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty()
    nationalCode:string

    @ApiProperty()
    firstName:string

    @ApiProperty()
    lastName:string
}