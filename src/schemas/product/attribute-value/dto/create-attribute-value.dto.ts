import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {AttributeEntity} from "../../attribute/entity/attribute.entity";
import {ProductEntity} from "../../product/entities/product.entity";

export class CreateAttributeValueDto {
    @ApiProperty()
    value:string

    @ApiProperty()
    attribute_id:string

    @ApiProperty()
    product_id:string

    @ApiHideProperty()
    ref_attribute?:AttributeEntity

    @ApiHideProperty()
    ref_product?:ProductEntity
}