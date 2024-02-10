import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {AttributeValuePriceEntity} from "../entities/attribute-value-price.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateAttributeValuePriceDto} from "../dto/create-attribute-value-price.dto";
import {UpdateAttributeValuePriceDto} from "../dto/update-attribute-value-price.dto";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";
import {Promise} from "mongoose";

@Injectable()
export class AttributeValuePriceRepository extends Repository<AttributeValuePriceEntity>
    implements RepositoryAbstract<AttributeValuePriceEntity, CreateAttributeValuePriceDto, UpdateAttributeValuePriceDto>{

    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(AttributeValuePriceEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateAttributeValuePriceDto): Promise<AttributeValuePriceEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<AttributeValuePriceEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<AttributeValuePriceEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeValuePriceDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }


}