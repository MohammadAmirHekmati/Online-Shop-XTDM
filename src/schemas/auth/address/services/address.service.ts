import {Injectable} from "@nestjs/common";
import {AddressRepository} from "../repositories/address.repository";
import {CreateAddressDto} from "../dto/create-address.dto";
import {Promise} from "mongoose";
import {AddressEntity} from "../entities/address.entity";
import {UpdateAddressDto} from "../dto/update-address.dto";
import {UpdateResult} from "typeorm";
import {CityService} from "./city.service";
import {ProfileService} from "../../profile/services/profile.service";

@Injectable()
export class AddressService {
    constructor(private addressRepository:AddressRepository,
                private cityService:CityService,
                private profileService:ProfileService) {
    }

    async createEntity(createEntityDto: CreateAddressDto): Promise<AddressEntity> {
        createEntityDto.ref_city=await this.cityService.findOneEntity(createEntityDto.city_id)
        createEntityDto.ref_profile=await this.profileService.findOneEntity(createEntityDto.profile_id)
        return await this.addressRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<AddressEntity[]> {
        return await this.addressRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<AddressEntity> {
        return await this.addressRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateAddressDto): Promise<UpdateResult> {
        updateEntityDto.city_id?updateEntityDto.ref_city=await this.cityService.findOneEntity(updateEntityDto.city_id):undefined
        delete updateEntityDto.city_id
        return await this.addressRepository.updateEntity(id, updateEntityDto)
    }
}