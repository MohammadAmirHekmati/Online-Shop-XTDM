import {Entity, ManyToOne, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {StateEntity} from "./state.entity";
import {AddressEntity} from "./address.entity";

@Entity({schema:"AUTH",name:"city"})
export class CityEntity extends AbstractEntity{
    name:string

    @ManyToOne(()=>StateEntity,(x)=>x.ref_cities)
    ref_state:StateEntity

    @OneToMany(()=>AddressEntity,(x)=>x.ref_city)
    ref_addresses:AddressEntity[]
}