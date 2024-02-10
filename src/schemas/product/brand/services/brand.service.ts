import {Injectable} from "@nestjs/common";
import {BrandRepository} from "../repository/brand.repository";
import {CreateBrandDto} from "../dto/create-brand.dto";
import {Promise} from "mongoose";
import {BrandEntity} from "../entity/brand.entity";
import {UpdateBrandDto} from "../dto/update-brand.dto";
import {UpdateResult} from "typeorm";

@Injectable()
export class BrandService{
constructor(private brandRepository:BrandRepository) {
    }

    async createEntity(createEntityDto: CreateBrandDto): Promise<BrandEntity> {
        return await this.brandRepository.createEntity(createEntityDto)

    }

    async findAllEntities(): Promise<BrandEntity[]> {
        return await this.brandRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<BrandEntity> {
        return await this.brandRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateBrandDto): Promise<UpdateResult> {
        return await this.brandRepository.updateEntity(id, updateEntityDto)
    }
}