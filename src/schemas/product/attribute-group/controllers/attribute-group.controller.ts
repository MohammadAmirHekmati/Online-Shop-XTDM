import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {AttributeGroupService} from "../services/attribute-group.service";
import {CreateAttributeGroupDto} from "../dto/create-attribute-group.dto";
import {AttributeGroupEntity} from "../entities/attribute-group.entity";
import {UpdateAttributeGroupDto} from "../dto/update-attribute-group.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[ATTRIBUTE-GROUP]")
@Controller("attribute-group")
export class AttributeGroupController {
    constructor(private attributeGroupService:AttributeGroupService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreateAttributeGroupDto): Promise<AttributeGroupEntity> {
        return this.attributeGroupService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<AttributeGroupEntity[]> {
        return this.attributeGroupService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query("id") id: string): Promise<AttributeGroupEntity> {
        return this.attributeGroupService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateAttributeGroupDto): Promise<UpdateResult> {
        return this.attributeGroupService.updateEntity(id,updateEntityDto)
    }
}