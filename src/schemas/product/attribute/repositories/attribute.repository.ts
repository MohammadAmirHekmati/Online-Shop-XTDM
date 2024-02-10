import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {AttributeEntity} from "../entity/attribute.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateAttributeDto} from "../dto/create-attribute.dto";
import {UpdateAttributeDto} from "../dto/update-attribute.dto";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class AttributeRepository extends Repository<AttributeEntity> implements RepositoryAbstract<AttributeEntity, CreateAttributeDto, UpdateAttributeDto>{
   constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
       super(AttributeEntity,dataSource.createEntityManager());
   }
    async createEntity(createEntityDto: CreateAttributeDto): Promise<AttributeEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<AttributeEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<AttributeEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}