import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {AttributeGroupEntity} from "../entities/attribute-group.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateAttributeGroupDto} from "../dto/create-attribute-group.dto";
import {UpdateAttributeGroupDto} from "../dto/update-attribute-group.dto";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class AttributeGroupRepository extends Repository<AttributeGroupEntity> implements RepositoryAbstract<AttributeGroupEntity, CreateAttributeGroupDto, UpdateAttributeGroupDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(AttributeGroupEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateAttributeGroupDto): Promise<AttributeGroupEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<AttributeGroupEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<AttributeGroupEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeGroupDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}