import {Column, Entity} from "typeorm";
import {AbstractEntity} from "../../../../common/abstract/asbtract.entity";
import {RolesEnum} from "../enum/role.enum";

@Entity({schema:"AUTH",name:"user"})
export class UserEntity extends AbstractEntity{
    @Column()
    mobile:string

    @Column()
    password:string

    @Column({default:true})
    isActive:boolean

    @Column({type:"enum",enum:RolesEnum,array:true,default:[RolesEnum.USER]})
    roles:RolesEnum[]
}