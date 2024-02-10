import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {UserEntity} from "../entities/user.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateUserDto} from "../dto/create-user.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";
import { sha256 } from "js-sha256";

@Injectable()
export class UserRepository extends Repository<UserEntity> implements RepositoryAbstract<UserEntity, CreateUserDto, any>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(UserEntity,dataSource.createEntityManager());
    }
    async createEntity(createEntityDto: CreateUserDto): Promise<UserEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<UserEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<UserEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: any): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

    async findUserByMobile(mobile:string){
        return await this.findOne({where:{mobile}})
    }

    async updatePassword(id:string,password:string){
      return  await this.update(id,{password:sha256(password)})
    }

}