import {Column, Entity, OneToMany} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {CityEntity} from "./city.entity";

@Entity({schema:"AUTH",name:"state"})
export class StateEntity extends AbstractEntity{
    @Column()
    name:string

    @OneToMany(()=>CityEntity,(x)=>x.ref_state)
    ref_cities:CityEntity[]
}