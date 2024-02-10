import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {CityService} from "../services/city.service";
import {CreateCityDto} from "../dto/create-city.dto";
import {Promise} from "mongoose";
import {CityEntity} from "../entities/city.entity";
import {UpdateResult} from "typeorm";

@ApiTags("[CITY]")
@Controller("city")
export class CityController {
    constructor(private cityService:CityService) {
    }

    @Post("create")
    async createEntity(@Body() createEntityDto: CreateCityDto): Promise<CityEntity> {
        return await this.cityService.createEntity(createEntityDto)
    }

    @Get("all")
    async findAllEntities(): Promise<CityEntity[]> {
        return await this.cityService.findAllEntities()
    }

    @Get("one")
    async findOneEntity(@Query("id") id: string): Promise<CityEntity> {
        return await this.cityService.findOneEntity(id)
    }

    @Patch("update")
    async updateEntity(@Query("id") id: string,@Body() updateEntityDto: CreateCityDto): Promise<UpdateResult> {
        return await this.cityService.updateEntity(id, updateEntityDto)
    }
}