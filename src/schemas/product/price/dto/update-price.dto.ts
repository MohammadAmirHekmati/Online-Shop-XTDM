import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {ProductEntity} from "../../product/entities/product.entity";

export class UpdatePriceDto {
    @ApiProperty()
    price:string

    @ApiProperty()
    product_id:string

    @ApiHideProperty()
    ref_product:ProductEntity
}