import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {GroupEntity} from "../entities/group.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateGroupDto} from "../dto/create-group.dto";
import {UpdateGroupDto} from "../dto/update-group.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class GroupRepository extends Repository<GroupEntity> implements RepositoryAbstract<GroupEntity, CreateGroupDto, UpdateGroupDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(GroupEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateGroupDto): Promise<GroupEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<GroupEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<GroupEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateGroupDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}