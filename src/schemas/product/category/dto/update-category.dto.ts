import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class UpdateCategoryDto {
    @ApiProperty()
    title:string

    @ApiProperty()
    logo:string

    @ApiProperty()
    persianTitle:string
}