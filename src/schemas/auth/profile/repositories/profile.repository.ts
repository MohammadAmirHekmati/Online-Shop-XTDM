import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {ProfileEntity} from "../entities/profile.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateProfileDto} from "../dto/create-profile.dto";
import {UpdateProfileDto} from "../dto/update-profile.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class ProfileRepository extends Repository<ProfileEntity> implements RepositoryAbstract<ProfileEntity, CreateProfileDto, UpdateProfileDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(ProfileEntity,dataSource.createEntityManager());
    }
    async createEntity(createEntityDto: CreateProfileDto): Promise<ProfileEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<ProfileEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<ProfileEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateProfileDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}