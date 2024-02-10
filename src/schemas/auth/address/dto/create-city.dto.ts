import {StateEntity} from "../entities/state.entity";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";

export class CreateCityDto {
    @ApiProperty()
    name:string

    @ApiProperty()
    state_id:string

    @ApiHideProperty()
    ref_state?:StateEntity
}