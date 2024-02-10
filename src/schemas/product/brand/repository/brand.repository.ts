import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {BrandEntity} from "../entity/brand.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateBrandDto} from "../dto/create-brand.dto";
import {UpdateBrandDto} from "../dto/update-brand.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class BrandRepository extends Repository<BrandEntity> implements RepositoryAbstract<BrandEntity, CreateBrandDto, UpdateBrandDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(BrandEntity,dataSource.createEntityManager());
    }
    async createEntity(createEntityDto: CreateBrandDto): Promise<BrandEntity> {
        return await this.save(this.create(createEntityDto))

    }

    async findAllEntities(): Promise<BrandEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<BrandEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateBrandDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}