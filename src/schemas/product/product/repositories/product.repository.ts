import {Inject, Injectable} from "@nestjs/common";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {ProductEntity} from "../entities/product.entity";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CreateProductDto} from "../dto/create-product.dto";
import {UpdateProductDto} from "../dto/update-product.dto";
import {Promise} from "mongoose";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";

@Injectable()
export class ProductRepository extends Repository<ProductEntity> implements RepositoryAbstract<ProductEntity, CreateProductDto, UpdateProductDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
        super(ProductEntity,dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateProductDto): Promise<ProductEntity> {
        return await this.save(this.create(createEntityDto))
    }

    async findAllEntities(): Promise<ProductEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<ProductEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateProductDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }

}