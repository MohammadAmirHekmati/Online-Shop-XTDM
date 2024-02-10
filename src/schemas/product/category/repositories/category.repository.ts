import {Inject, Injectable} from "@nestjs/common";
import {RepositoryAbstract} from "../../../../common/abstract/repository.abstract";
import {CategoryEntity} from "../entities/category.entity";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {UpdateCategoryDto} from "../dto/update-category.dto";
import {Promise} from "mongoose";
import {DataSource, Repository, UpdateResult} from "typeorm";
import {PostgresProviderConstant} from "../../../../common/database/postgres.provider";


@Injectable()
export class CategoryRepository extends Repository<CategoryEntity> implements RepositoryAbstract<CategoryEntity, CreateCategoryDto, UpdateCategoryDto>{
    constructor(@Inject(PostgresProviderConstant) private dataSource:DataSource) {
    super(CategoryEntity,dataSource.createEntityManager())
    }

    async createEntity(createEntityDto: CreateCategoryDto): Promise<CategoryEntity> {
        const category=new CategoryEntity()
        category.title=createEntityDto.title
        category.logo=createEntityDto.logo
        createEntityDto.parent_id?category.parent=await this.findOneEntity(createEntityDto.parent_id):null
        return await this.save(this.create(category))
    }

    async findAllEntities(): Promise<CategoryEntity[]> {
        return await this.find()
    }

    async findOneEntity(id: string): Promise<CategoryEntity> {
        return await this.findOne({where:{id}})
    }

    async updateEntity(id: string, updateEntityDto: UpdateCategoryDto): Promise<UpdateResult> {
        return await this.update(id,updateEntityDto)
    }
}