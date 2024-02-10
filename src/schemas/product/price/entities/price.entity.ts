import {Column, Entity, ManyToOne} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {ProductEntity} from "../../product/entities/product.entity";
import {DiscountEntity} from "../../discount/entities/discount.entity";

@Entity({schema:"PRODUCT",name:"price"})
export class PriceEntity extends AbstractEntity{
    @Column()
    price:string

    @ManyToOne(()=>ProductEntity,(x)=>x.ref_price)
    ref_product:ProductEntity

    @ManyToOne(()=>DiscountEntity,(x)=>x.ref_prices)
    ref_discount:DiscountEntity
}