import {Column, Entity, ManyToOne} from "typeorm";
import {ProductEntity} from "../../product/entities/product.entity";
import {AttributeValueEntity} from "../../attribute-value/entities/attribute-value.entity";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {DiscountEntity} from "../../discount/entities/discount.entity";

@Entity({schema:"PRODUCT",name:"attribute-value-price"})
export class AttributeValuePriceEntity extends AbstractEntity{

    @ManyToOne(()=>ProductEntity,(x)=>x.ref_attribute_value_price)
    ref_product:ProductEntity

    @ManyToOne(()=>AttributeValueEntity,(x)=>x.ref_attribute_value_price)
    ref_attribute_value:AttributeValueEntity

    @Column()
    additionalPrice:string

    @Column()
    balance:number

    @ManyToOne(()=>DiscountEntity,(x)=>x.ref_attribute_value_prices)
    ref_discount:DiscountEntity
}