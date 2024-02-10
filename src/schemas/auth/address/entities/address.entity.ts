import {Column, Entity, ManyToOne} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {CityEntity} from "./city.entity";
import {ProfileEntity} from "../../profile/entities/profile.entity";

@Entity({schema:"AUTH",name:"address"})
export class AddressEntity extends AbstractEntity{
    @Column()
    street:string

    @Column()
    plaque:number

    @Column()
    unit:number

    @Column()
    postCode:number

    @ManyToOne(()=>CityEntity,(x)=>x.ref_addresses)
    ref_city:CityEntity

    @ManyToOne(()=>ProfileEntity,(x)=>x.ref_address)
    ref_profile:ProfileEntity
}