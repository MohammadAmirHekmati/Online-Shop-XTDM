import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AttributeService} from "../services/attribute.service";
import {CreateAttributeDto} from "../dto/create-attribute.dto";
import {AttributeEntity} from "../entity/attribute.entity";
import {UpdateAttributeDto} from "../dto/update-attribute.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[ATTRIBUTE]")
@Controller("attribute")
export class AttributeController {
    constructor(private attributeService:AttributeService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreateAttributeDto): Promise<AttributeEntity> {
        return this.attributeService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<AttributeEntity[]> {
        return this.attributeService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query("id") id: string): Promise<AttributeEntity> {
        return this.attributeService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateAttributeDto): Promise<UpdateResult> {
        return this.attributeService.updateEntity(id, updateEntityDto)
    }
}