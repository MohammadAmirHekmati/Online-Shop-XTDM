import {Entity, ManyToOne} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {GroupEntity} from "../../group/entities/group.entity";
import {AttributeEntity} from "../../attribute/entity/attribute.entity";

@Entity({schema:"PRODUCT",name:"attribute-group"})
export class AttributeGroupEntity extends AbstractEntity{
    @ManyToOne(()=>GroupEntity,(x)=>x.ref_attribute_group)
    ref_group:GroupEntity

    @ManyToOne(()=>AttributeEntity,(x)=>x.ref_attribute_group)
    ref_attribute:AttributeEntity
}