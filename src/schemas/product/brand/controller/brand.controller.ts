import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {BrandService} from "../services/brand.service";
import {CreateBrandDto} from "../dto/create-brand.dto";
import {Promise} from "mongoose";
import {BrandEntity} from "../entity/brand.entity";
import {UpdateBrandDto} from "../dto/update-brand.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[BRAND]")
@Controller("brand")
export class BrandController {
    constructor(private brandService:BrandService) {
    }

    @Post("create")
    async createEntity(@Body() createEntityDto: CreateBrandDto): Promise<BrandEntity> {
        return await this.brandService.createEntity(createEntityDto)

    }

    @Get("all")
    async findAllEntities(): Promise<BrandEntity[]> {
        return await this.brandService.findAllEntities()
    }

    @Get("one")
    async findOneEntity(@Query("id") id: string): Promise<BrandEntity> {
        return await this.brandService.findOneEntity(id)
    }

    @Patch("update")
    async updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateBrandDto): Promise<UpdateResult> {
        return await this.brandService.updateEntity(id, updateEntityDto)
    }
}