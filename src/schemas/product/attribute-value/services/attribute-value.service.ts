import {Injectable} from "@nestjs/common";
import {AttributeValueRepository} from "../repositories/attribute-value.repository";
import {CreateAttributeValueDto} from "../dto/create-attribute-value.dto";
import {Promise} from "mongoose";
import {AttributeValueEntity} from "../entities/attribute-value.entity";
import {UpdateAttributeValueDto} from "../dto/update-attribute-value.dto";
import {UpdateResult} from "typeorm";
import {ProductService} from "../../product/services/product.service";
import {AttributeService} from "../../attribute/services/attribute.service";

@Injectable()
export class AttributeValueService {
    constructor(private attributeValueRepository:AttributeValueRepository,
                private productService:ProductService,
                private attributeService:AttributeService) {
    }

    async createEntity(createEntityDto: CreateAttributeValueDto): Promise<AttributeValueEntity> {
        createEntityDto.ref_attribute=await this.attributeService.findOneEntity(createEntityDto.attribute_id)
        createEntityDto.ref_product=await this.productService.findOneEntity(createEntityDto.product_id)
        return await this.attributeValueRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<AttributeValueEntity[]> {
        return await this.attributeValueRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<AttributeValueEntity> {
        return await this.attributeValueRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeValueDto): Promise<UpdateResult> {
        updateEntityDto.attribute_id?updateEntityDto.ref_attribute=await this.attributeService.findOneEntity(updateEntityDto.attribute_id):undefined
        updateEntityDto.product_id?updateEntityDto.ref_product=await this.productService.findOneEntity(updateEntityDto.product_id):undefined
        delete updateEntityDto.attribute_id
        delete updateEntityDto.product_id
        return await this.attributeValueRepository.updateEntity(id, updateEntityDto)
    }
}