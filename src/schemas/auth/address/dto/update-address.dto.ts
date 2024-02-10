import {CityEntity} from "../entities/city.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class UpdateAddressDto {
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

    @ApiHideProperty()
    ref_city:CityEntity
}