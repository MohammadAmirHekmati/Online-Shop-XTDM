import {Column, ManyToOne} from "typeorm";
import {ProductEntity} from "../../product/entities/product.entity";
import {AttributeValueEntity} from "../../attribute-value/entities/attribute-value.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateAttributeValuePriceDto {
    @ApiProperty()
    product_id:string

    @ApiHideProperty()
    ref_product:ProductEntity

    @ApiHideProperty()
    ref_attribute_value:AttributeValueEntity

    @ApiProperty()
    attribute_value_id:string

    @ApiProperty()
    additionalPrice:string

    @ApiProperty()
    balance:number
}