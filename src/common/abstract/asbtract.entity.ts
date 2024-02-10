import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({schema:"public",name:"asbtract"})
export class AbstractEntity extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id:string
}