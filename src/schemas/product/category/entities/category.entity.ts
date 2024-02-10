import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {ProductEntity} from "../../product/entities/product.entity";

@Entity({schema:"PRODUCT",name:"category"})
@Tree("nested-set")
export class CategoryEntity extends AbstractEntity{
    @Column()
    title:string

    @Column()
    persianTitle:string

    @Column()
    logo:string

    @TreeChildren()
    children: CategoryEntity[]

    @TreeParent()
    parent: CategoryEntity

    @OneToMany(()=>ProductEntity,(x)=>x.ref_category)
    ref_products:ProductEntity[]
}