import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {PriceService} from "../services/price.service";
import {CreatePriceDto} from "../dto/create-price.dto";
import {Promise} from "mongoose";
import {PriceEntity} from "../entities/price.entity";
import {UpdatePriceDto} from "../dto/update-price.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[PRICE]")
@Controller("price")
export class PriceController {
    constructor(private priceService:PriceService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreatePriceDto): Promise<PriceEntity> {
        return this.priceService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<PriceEntity[]> {
        return this.priceService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query("id") id: string): Promise<PriceEntity> {
        return this.priceService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdatePriceDto): Promise<UpdateResult> {
        return this.priceService.updateEntity(id,updateEntityDto)
    }
}