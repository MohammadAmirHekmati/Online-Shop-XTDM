import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class CreateCategoryDto {
    @ApiProperty()
    title:string

    @ApiProperty()
    logo:string

    @ApiProperty()
    parent_id?:string

    @ApiProperty()
    persianTitle:string
}