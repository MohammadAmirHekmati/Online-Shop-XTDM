import {Column} from "typeorm";
import {AttributeTypeEnum} from "../enum/attribute-type.enum";
import {ApiProperty} from "@nestjs/swagger";

export class CreateAttributeDto {
    @ApiProperty()
    title:string

    @ApiProperty({enum:AttributeTypeEnum,example:AttributeTypeEnum.COLOR})
    type:AttributeTypeEnum

    @ApiProperty()
    main:boolean
}