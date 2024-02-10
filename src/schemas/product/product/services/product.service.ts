import {Injectable} from "@nestjs/common";
import {ProductRepository} from "../repositories/product.repository";
import {CreateProductDto} from "../dto/create-product.dto";
import {Promise} from "mongoose";
import {ProductEntity} from "../entities/product.entity";
import {UpdateProductDto} from "../dto/update-product.dto";
import {UpdateResult} from "typeorm";
import {GroupService} from "../../group/services/group.service";
import {BrandService} from "../../brand/services/brand.service";
import {CategoryService} from "../../category/services/category.service";

@Injectable()
export class ProductService {
    constructor(private productRepository:ProductRepository,
                private groupService:GroupService,
                private brandService:BrandService,
                private categoryService:CategoryService) {
    }

    async createEntity(createEntityDto: CreateProductDto): Promise<ProductEntity> {
        createEntityDto.ref_group=await this.groupService.findOneEntity(createEntityDto.group_id)
        createEntityDto.ref_brand=await this.brandService.findOneEntity(createEntityDto.brand_id)
        createEntityDto.ref_category=await this.categoryService.findOneEntity(createEntityDto.category_id)
        return await this.productRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<ProductEntity[]> {
        return await this.productRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<ProductEntity> {
        return await this.productRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateProductDto): Promise<UpdateResult> {
        updateEntityDto.group_id?updateEntityDto.ref_group=await this.groupService.findOneEntity(updateEntityDto.group_id):undefined
        updateEntityDto.brand_id?updateEntityDto.ref_brand=await this.brandService.findOneEntity(updateEntityDto.brand_id):undefined
        updateEntityDto.category_id?updateEntityDto.ref_category=await this.categoryService.findOneEntity(updateEntityDto.category_id):undefined
        delete updateEntityDto.brand_id
        delete updateEntityDto.group_id
        delete updateEntityDto.category_id
        return await this.productRepository.updateEntity(id,updateEntityDto)
    }
}