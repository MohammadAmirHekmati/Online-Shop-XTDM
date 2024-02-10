import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {AttributeTypeEnum} from "../enum/attribute-type.enum";
import {AttributeGroupEntity} from "../../attribute-group/entities/attribute-group.entity";
import {AttributeValueEntity} from "../../attribute-value/entities/attribute-value.entity";

@Entity({schema:"PRODUCT",name:"attribute"})
export class AttributeEntity extends AbstractEntity{
    @Column()
    title:string

    @Column({type:"enum",enum:AttributeTypeEnum,default:AttributeTypeEnum.CHARACTER})
    type:AttributeTypeEnum

    @Column()
    main:boolean

    @OneToMany(()=>AttributeGroupEntity,(x)=>x.ref_attribute)
    ref_attribute_group:AttributeGroupEntity[]

    @OneToMany(()=>AttributeValueEntity,(x)=>x.ref_attribute)
    ref_attribute_value:AttributeValueEntity[]
}