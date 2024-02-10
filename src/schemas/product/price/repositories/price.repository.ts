import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {PriceEntity} from "../entities/price.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreatePriceDto} from "../dto/create-price.dto";
import {UpdatePriceDto} from "../dto/update-price.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class PriceRepository extends Repository<PriceEntity> implements RepositoryAbstract<PriceEntity, CreatePriceDto, UpdatePriceDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(PriceEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreatePriceDto): Promise<PriceEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<PriceEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<PriceEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdatePriceDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}