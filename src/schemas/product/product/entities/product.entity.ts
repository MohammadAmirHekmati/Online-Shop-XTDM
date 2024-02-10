import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {GroupEntity} from "../../group/entities/group.entity";
import {PriceEntity} from "../../price/entities/price.entity";
import {AttributeValueEntity} from "../../attribute-value/entities/attribute-value.entity";
import {BrandEntity} from "../../brand/entity/brand.entity";
import {CategoryEntity} from "../../category/entities/category.entity";
import {AttributeValuePriceEntity} from "../../attribute-value-price/entities/attribute-value-price.entity";

@Entity({schema:"PRODUCT",name:"product"})
export class ProductEntity extends AbstractEntity{
    @Column()
    title:string

    @Column()
    persianTitle:string

    @Column("text",{array:true,nullable:true})
    landingPicture:string[]

    @Column("text",{array:true,nullable:true})
    pictures:string[]

    @Column()
    detail:string

    @ManyToOne(()=>GroupEntity,(x)=>x.ref_products)
    ref_group:GroupEntity

    @OneToMany(()=>PriceEntity,(x)=>x.ref_product)
    ref_price:PriceEntity[]

    @OneToMany(()=>AttributeValueEntity,(x)=>x.ref_product)
    ref_attribute_value:AttributeValueEntity[]

    @ManyToOne(()=>BrandEntity,(x)=>x.ref_products)
    ref_brand:BrandEntity

    @ManyToOne(()=>CategoryEntity,(x)=>x.ref_products)
    ref_category:CategoryEntity

    @OneToMany(()=>AttributeValuePriceEntity,(x)=>x.ref_product)
    ref_attribute_value_price:AttributeValuePriceEntity[]
}