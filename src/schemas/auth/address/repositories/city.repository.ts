import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {CityEntity} from "../entities/city.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateCityDto} from "../dto/create-city.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class CityRepository extends Repository<CityEntity> implements RepositoryAbstract<CityEntity, CreateCityDto, CreateCityDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(CityEntity,dataSource.createEntityManager());
    }
    async createEntity(createEntityDto: CreateCityDto): Promise<CityEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<CityEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<CityEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: CreateCityDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}