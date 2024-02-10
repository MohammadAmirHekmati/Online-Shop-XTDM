import {GroupEntity} from "../../group/entities/group.entity";
import {ManyToOne} from "typeorm";
import {AttributeEntity} from "../../attribute/entity/attribute.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateAttributeGroupDto {
    @ApiProperty()
    group_id:string

    @ApiProperty()
    attribute_id:string

    @ApiHideProperty()
    ref_group?:GroupEntity

    @ApiHideProperty()
    ref_attribute?:AttributeEntity
}