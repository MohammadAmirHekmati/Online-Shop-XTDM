import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {StateService} from "../services/state.service";
import {CreateStateDto} from "../dto/create-state.dto";
import {Promise} from "mongoose";
import {StateEntity} from "../entities/state.entity";
import {UpdateResult} from "typeorm";

@ApiTags("[STATE]")
@Controller("state")
export class StateController {
    constructor(private stateService:StateService) {
    }

    @Post("create")
    async createEntity(@Body() createEntityDto: CreateStateDto): Promise<StateEntity> {
        return await this.stateService.createEntity(createEntityDto)
    }

    @Get("all")
    async findAllEntities(): Promise<StateEntity[]> {
        return await this.stateService.findAllEntities()
    }

    @Get("one")
    async findOneEntity(@Query("id") id: string): Promise<StateEntity> {
        return await this.stateService.findOneEntity(id)
    }

    @Patch("update")
    async updateEntity(@Query("id") id: string,@Body() updateEntityDto: CreateStateDto): Promise<UpdateResult> {
        return await this.stateService.updateEntity(id,updateEntityDto)
    }
}