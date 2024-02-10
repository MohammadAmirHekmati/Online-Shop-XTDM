import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {StateEntity} from "../entities/state.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateStateDto} from "../dto/create-state.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class StateRepository extends Repository<StateEntity> implements RepositoryAbstract<StateEntity, CreateStateDto, CreateStateDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(StateEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateStateDto): Promise<StateEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<StateEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<StateEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: CreateStateDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}