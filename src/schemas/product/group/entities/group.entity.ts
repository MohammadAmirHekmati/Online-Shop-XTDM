import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {AttributeGroupEntity} from "../../attribute-group/entities/attribute-group.entity";
import {ProductEntity} from "../../product/entities/product.entity";

@Entity({schema:"PRODUCT",name:"group"})
export class GroupEntity extends AbstractEntity{
    @Column()
    title:string

    @OneToMany(()=>AttributeGroupEntity,(x)=>x.ref_group)
    ref_attribute_group:AttributeGroupEntity[]

    @OneToMany(()=>ProductEntity,(x)=>x.ref_group)
    ref_products:ProductEntity[]
}