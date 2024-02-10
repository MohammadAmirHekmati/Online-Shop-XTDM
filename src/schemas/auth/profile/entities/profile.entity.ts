import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {AddressEntity} from "../../address/entities/address.entity";

@Entity({schema:"AUTH",name:"profile"})
export class ProfileEntity extends AbstractEntity{
    @Column()
    nationalCode:string

    @Column()
    firstName:string

    @Column()
    lastName:string

    @OneToMany(()=>AddressEntity,(x)=>x.ref_profile)
    ref_address:AddressEntity[]
}