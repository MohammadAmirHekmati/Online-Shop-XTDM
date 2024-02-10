import {GroupEntity} from "../../group/entities/group.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {BrandEntity} from "../../brand/entity/brand.entity";
import {CategoryEntity} from "../../category/entities/category.entity";

export class CreateProductDto {
    @ApiProperty()
    title:string

    @ApiProperty()
    landingPicture:string[]

    @ApiProperty()
    persianTitle:string

    @ApiProperty()
    pictures:string[]

    @ApiProperty()
    detail:string

    @ApiProperty()
    group_id:string

    @ApiHideProperty()
    ref_group?:GroupEntity

    @ApiProperty()
    brand_id:string

    @ApiHideProperty()
    ref_brand:BrandEntity

    @ApiProperty()
    category_id:string

    @ApiHideProperty()
    ref_category?:CategoryEntity
}