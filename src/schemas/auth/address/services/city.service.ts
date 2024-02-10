import {Injectable, OnModuleInit} from "@nestjs/common";
import {CityRepository} from "../repositories/city.repository";
import {CreateCityDto} from "../dto/create-city.dto";
import {CityEntity} from "../entities/city.entity";
import {UpdateResult} from "typeorm";
import {StateService} from "./state.service";
import {mamad} from "./citites"

@Injectable()
export class CityService {
    constructor(private cityRepository:CityRepository,
                private stateService:StateService) {
    }

    async createEntity(createEntityDto: CreateCityDto): Promise<CityEntity> {
        createEntityDto.ref_state=await this.stateService.findOneEntity(createEntityDto.state_id)
        return await this.cityRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<CityEntity[]> {
        return await this.cityRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<CityEntity> {
        return await this.cityRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: CreateCityDto): Promise<UpdateResult> {
        updateEntityDto.state_id?updateEntityDto.ref_state=await this.stateService.findOneEntity(updateEntityDto.state_id):undefined
        delete updateEntityDto.state_id
        return await this.cityRepository.updateEntity(id,updateEntityDto)
    }

    // async onModuleInit() {
    //     console.log("STARTED...")
    //     for (const argument of mamad) {
    //         const state=await this.stateService.createEntity({name:argument.province})
    //         for (const argumentElement of argument.cities) {
    //             await this.cityRepository.save(this.cityRepository.create({name:argumentElement,ref_state:state}))
    //         }
    //     }
    //
    //     console.log("DONE...")
    // }
}