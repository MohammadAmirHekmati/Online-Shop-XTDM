import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {AddressService} from "../services/address.service";
import {CreateAddressDto} from "../dto/create-address.dto";
import {Promise} from "mongoose";
import {AddressEntity} from "../entities/address.entity";
import {UpdateAddressDto} from "../dto/update-address.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[ADDRESS]")
@Controller("address")
export class AddressController {
    constructor(private addressService:AddressService) {
    }

    @Post("create")
    async createEntity(@Body() createEntityDto: CreateAddressDto): Promise<AddressEntity> {
        return await this.addressService.createEntity(createEntityDto)
    }

    @Get("all")
    async findAllEntities(): Promise<AddressEntity[]> {
        return await this.addressService.findAllEntities()
    }

    @Get("one")
    async findOneEntity(@Query("id") id: string): Promise<AddressEntity> {
        return await this.addressService.findOneEntity(id)
    }

    @Patch("update")
    async updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateAddressDto): Promise<UpdateResult> {
        return await this.addressService.updateEntity(id, updateEntityDto)
    }
}