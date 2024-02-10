import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {AttributeValueEntity} from "../entities/attribute-value.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateAttributeValueDto} from "../dto/create-attribute-value.dto";
import {UpdateAttributeValueDto} from "../dto/update-attribute-value.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class AttributeValueRepository extends Repository<AttributeValueEntity> implements RepositoryAbstract<AttributeValueEntity, CreateAttributeValueDto, UpdateAttributeValueDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(AttributeValueEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateAttributeValueDto): Promise<AttributeValueEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<AttributeValueEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<AttributeValueEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeValueDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }
    
}