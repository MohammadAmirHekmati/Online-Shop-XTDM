import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {PriceEntity} from "../../price/entities/price.entity";
import {AttributeValueEntity} from "../../attribute-value/entities/attribute-value.entity";
import {AttributeValuePriceEntity} from "../../attribute-value-price/entities/attribute-value-price.entity";

@Entity({schema:"PRODUCT",name:"discount"})
export class DiscountEntity extends AbstractEntity{
    @Column()
    discount:string

    @Column()
    cause:string

    @Column()
    description:string

    @OneToMany(()=>PriceEntity,(x)=>x.ref_discount)
    ref_prices:PriceEntity[]

    @OneToMany(()=>AttributeValuePriceEntity,(x)=>x.ref_discount)
    ref_attribute_value_prices:AttributeValuePriceEntity[]
}
