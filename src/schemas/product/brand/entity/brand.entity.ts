import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {ProductEntity} from "../../product/entities/product.entity";

@Entity({schema:"PRODUCT",name:"brand"})
export class BrandEntity extends AbstractEntity{
    @Column()
    title:string

    @Column()
    persianTitle:string

    @Column()
    picture:string

    @Column({default:false})
    inLanding:boolean

    @OneToMany(()=>ProductEntity,(x)=>x.ref_brand)
    ref_products:ProductEntity[]
}