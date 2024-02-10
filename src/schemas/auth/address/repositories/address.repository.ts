import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {AddressEntity} from "../entities/address.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateAddressDto} from "../dto/create-address.dto";
import {UpdateAddressDto} from "../dto/update-address.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class AddressRepository extends Repository<AddressEntity> implements RepositoryAbstract<AddressEntity, CreateAddressDto,UpdateAddressDto >{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(AddressEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateAddressDto): Promise<AddressEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<AddressEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<AddressEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateAddressDto): Promise<UpdateResult> {
        return await this.update(id, updateEntityDto)
    }

}