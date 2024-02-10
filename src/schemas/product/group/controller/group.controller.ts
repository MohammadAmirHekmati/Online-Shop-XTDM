import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {GroupService} from "../services/group.service";
import {CreateGroupDto} from "../dto/create-group.dto";
import {Promise} from "mongoose";
import {GroupEntity} from "../entities/group.entity";
import {UpdateGroupDto} from "../dto/update-group.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[GROUP]")
@Controller("group")
export class GroupController {
    constructor(private groupService:GroupService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreateGroupDto): Promise<GroupEntity> {
        return this.groupService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<GroupEntity[]> {
        return this.groupService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query("id") id: string): Promise<GroupEntity> {
        return this.groupService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateGroupDto): Promise<UpdateResult> {
        return this.groupService.updateEntity(id, updateEntityDto)
    }
}