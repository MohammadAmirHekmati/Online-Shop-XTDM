import {Column, Entity, ManyToOne, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {AttributeEntity} from "../../attribute/entity/attribute.entity";
import {ProductEntity} from "../../product/entities/product.entity";
import {DiscountEntity} from "../../discount/entities/discount.entity";
import {AttributeValuePriceEntity} from "../../attribute-value-price/entities/attribute-value-price.entity";

@Entity({schema:"PRODUCT",name:"attribute-value"})
export class AttributeValueEntity extends AbstractEntity{
    @Column()
    value:string

    @ManyToOne(()=>AttributeEntity,(x)=>x.ref_attribute_value)
    ref_attribute:AttributeEntity

    @ManyToOne(()=>ProductEntity,(x)=>x.ref_attribute_value)
    ref_product:ProductEntity

    @OneToMany(()=>AttributeValuePriceEntity,(x)=>x.ref_attribute_value)
    ref_attribute_value_price:AttributeValuePriceEntity[]
}