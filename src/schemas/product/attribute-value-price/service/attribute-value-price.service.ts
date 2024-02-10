import {Injectable} from "@nestjs/common";
import {AttributeValuePriceRepository} from "../repository/attribute-value-price.repository";
import {CreateAttributeValuePriceDto} from "../dto/create-attribute-value-price.dto";
import {Promise} from "mongoose";
import {AttributeValuePriceEntity} from "../entities/attribute-value-price.entity";
import {UpdateAttributeValuePriceDto} from "../dto/update-attribute-value-price.dto";
import {UpdateResult} from "typeorm";
import {AttributeValueService} from "../../attribute-value/services/attribute-value.service";
import {ProductService} from "../../product/services/product.service";

@Injectable()
export class AttributeValuePriceService {
    constructor(private attributeValuePriceRepository:AttributeValuePriceRepository,
                private attributeValueService:AttributeValueService,
                private productService:ProductService) {
    }

    async createEntity(createEntityDto: CreateAttributeValuePriceDto): Promise<AttributeValuePriceEntity> {
        createEntityDto.ref_attribute_value=await this.attributeValueService.findOneEntity(createEntityDto.attribute_value_id)
        createEntityDto.ref_product=await this.productService.findOneEntity(createEntityDto.product_id)
        return await this.attributeValuePriceRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<AttributeValuePriceEntity[]> {
        return await this.attributeValuePriceRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<AttributeValuePriceEntity> {
        return await this.attributeValuePriceRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeValuePriceDto): Promise<UpdateResult> {
        updateEntityDto.attribute_value_id?updateEntityDto.ref_attribute_value=await this.attributeValueService.findOneEntity(updateEntityDto.attribute_value_id):undefined
        updateEntityDto.product_id?updateEntityDto.ref_product=await this.productService.findOneEntity(updateEntityDto.product_id):undefined
        delete updateEntityDto.product_id
        delete updateEntityDto.attribute_value_id
        return await this.attributeValuePriceRepository.updateEntity(id, updateEntityDto)
    }
}