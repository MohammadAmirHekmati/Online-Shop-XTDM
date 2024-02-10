import {Injectable} from "@nestjs/common";
import {ProfileRepository} from "../repositories/profile.repository";
import {CreateProfileDto} from "../dto/create-profile.dto";
import {Promise} from "mongoose";
import {ProfileEntity} from "../entities/profile.entity";
import {UpdateProfileDto} from "../dto/update-profile.dto";
import {UpdateResult} from "typeorm";

@Injectable()
export class ProfileService {
    constructor(private profileRepository:ProfileRepository) {
    }

    async createEntity(createEntityDto: CreateProfileDto): Promise<ProfileEntity> {
        return await this.profileRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<ProfileEntity[]> {
        return await this.profileRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<ProfileEntity> {
        return await this.profileRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateProfileDto): Promise<UpdateResult> {
        return await this.profileRepository.updateEntity(id, updateEntityDto)
    }
}