import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {AttributeValueService} from "../services/attribute-value.service";
import {CreateAttributeValueDto} from "../dto/create-attribute-value.dto";
import {Promise} from "mongoose";
import {AttributeValueEntity} from "../entities/attribute-value.entity";
import {UpdateAttributeValueDto} from "../dto/update-attribute-value.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[ATTRIBUTE-VALUE]")
@Controller("attribute-value")
export class AttributeValueController {
    constructor(private attributeValueService:AttributeValueService) {
    }

    @Post("create")
    async createEntity(@Body() createEntityDto: CreateAttributeValueDto): Promise<AttributeValueEntity> {
        return await this.attributeValueService.createEntity(createEntityDto)
    }

    @Get("all")
    async findAllEntities(): Promise<AttributeValueEntity[]> {
        return await this.attributeValueService.findAllEntities()
    }

    @Get("one")
    async findOneEntity(@Query("id") id: string): Promise<AttributeValueEntity> {
        return await this.attributeValueService.findOneEntity(id)
    }

    @Patch("update")
    async updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateAttributeValueDto): Promise<UpdateResult> {
        return await this.attributeValueService.updateEntity(id, updateEntityDto)
    }
}
