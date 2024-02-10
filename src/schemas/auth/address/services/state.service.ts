import {Injectable} from "@nestjs/common";
import {StateRepository} from "../repositories/state.repository";
import {CreateStateDto} from "../dto/create-state.dto";
import {Promise} from "mongoose";
import {StateEntity} from "../entities/state.entity";
import {UpdateResult} from "typeorm";

@Injectable()
export class StateService {
    constructor(private stateRepository:StateRepository) {
    }

    async createEntity(createEntityDto: CreateStateDto): Promise<StateEntity> {
        return await this.stateRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<StateEntity[]> {
        return await this.stateRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<StateEntity> {
        return await this.stateRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: CreateStateDto): Promise<UpdateResult> {
        return await this.stateRepository.updateEntity(id,updateEntityDto)
    }
}