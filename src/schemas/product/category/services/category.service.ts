import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repositories/category.repository";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {Promise} from "mongoose";
import {CategoryEntity} from "../entities/category.entity";
import {UpdateCategoryDto} from "../dto/update-category.dto";
import {UpdateResult} from "typeorm";

@Injectable()
export class CategoryService {
    constructor(private categoryRepository:CategoryRepository) {
    }

    async createEntity(createEntityDto: CreateCategoryDto): Promise<CategoryEntity> {
        return await this.categoryRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<CategoryEntity[]> {
        return await this.categoryRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<CategoryEntity> {
        return await this.categoryRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateCategoryDto): Promise<UpdateResult> {
        return await this.categoryRepository.updateEntity(id, updateEntityDto)
    }


}