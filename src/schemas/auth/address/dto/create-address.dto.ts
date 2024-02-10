import {Column, ManyToOne} from "typeorm";
import {CityEntity} from "../entities/city.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {ProfileEntity} from "../../profile/entities/profile.entity";

export class CreateAddressDto {
    @ApiProperty()
    street:string

    @ApiProperty()
    plaque:number

    @ApiProperty()
    unit:number

    @ApiProperty()
    postCode:number

    @ApiProperty()
    city_id:string

    @ApiProperty()
    profile_id:string

    @ApiHideProperty()
    ref_city:CityEntity

    @ApiHideProperty()
    ref_profile:ProfileEntity
}