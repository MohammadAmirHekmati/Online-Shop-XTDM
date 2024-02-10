import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {GroupEntity} from "../../group/entities/group.entity";
import {AttributeEntity} from "../../attribute/entity/attribute.entity";

export class UpdateAttributeGroupDto {
    @ApiProperty()
    group_id:string

    @ApiProperty()
    attribute_id:string

    @ApiHideProperty()
    ref_group?:GroupEntity

    @ApiHideProperty()
    ref_attribute?:AttributeEntity
}