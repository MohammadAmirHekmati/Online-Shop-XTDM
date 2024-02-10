import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBrandDto {
    @ApiProperty()
    title:string

    @ApiProperty()
    picture:string

    @ApiProperty()
    inLanding:boolean

    @ApiProperty()
    persianTitle:string
}