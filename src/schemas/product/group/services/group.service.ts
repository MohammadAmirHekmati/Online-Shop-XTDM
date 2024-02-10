import {Injectable} from "@nestjs/common";
import {GroupRepository} from "../repository/group.repository";
import {CreateGroupDto} from "../dto/create-group.dto";
import {Promise} from "mongoose";
import {GroupEntity} from "../entities/group.entity";
import {UpdateGroupDto} from "../dto/update-group.dto";
import {UpdateResult} from "typeorm";

@Injectable()
export class GroupService {
    constructor(private groupRepository:GroupRepository) {
    }

    async createEntity(createEntityDto: CreateGroupDto): Promise<GroupEntity> {
        return await this.groupRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<GroupEntity[]> {
        return await this.groupRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<GroupEntity> {
        return await this.groupRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateGroupDto): Promise<UpdateResult> {
        return await this.groupRepository.updateEntity(id, updateEntityDto)
    }
}