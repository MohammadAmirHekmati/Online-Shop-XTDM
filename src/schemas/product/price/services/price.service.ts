import {Injectable} from "@nestjs/common";
import {PriceRepository} from "../repositories/price.repository";
import {CreatePriceDto} from "../dto/create-price.dto";
import {Promise} from "mongoose";
import {PriceEntity} from "../entities/price.entity";
import {UpdatePriceDto} from "../dto/update-price.dto";
import {UpdateResult} from "typeorm";
import {ProductService} from "../../product/services/product.service";

@Injectable()
export class PriceService {
    constructor(private priceRepository:PriceRepository,
                private productService:ProductService) {
    }

    async createEntity(createEntityDto: CreatePriceDto): Promise<PriceEntity> {
        const product=await this.productService.findOneEntity(createEntityDto.product_id)
        createEntityDto.ref_product=product
        return await this.priceRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<PriceEntity[]> {
        return await this.priceRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<PriceEntity> {
        return await this.priceRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdatePriceDto): Promise<UpdateResult> {
        updateEntityDto.product_id?updateEntityDto.ref_product=await this.productService.findOneEntity(updateEntityDto.product_id):undefined
        delete updateEntityDto.product_id
        return await this.priceRepository.updateEntity(id,updateEntityDto)
    }
}