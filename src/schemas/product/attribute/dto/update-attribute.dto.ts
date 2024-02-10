import {ApiProperty} from "@nestjs/swagger";
import {AttributeTypeEnum} from "../enum/attribute-type.enum";

export class UpdateAttributeDto {
    @ApiProperty()
    title:string

    @ApiProperty({enum:AttributeTypeEnum,example:AttributeTypeEnum.COLOR})
    type:AttributeTypeEnum

    @ApiProperty()
    main:boolean
}