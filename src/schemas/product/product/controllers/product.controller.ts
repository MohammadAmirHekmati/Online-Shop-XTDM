import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {ProductService} from "../services/product.service";
import {CreateProductDto} from "../dto/create-product.dto";
import {Promise} from "mongoose";
import {ProductEntity} from "../entities/product.entity";
import {UpdateProductDto} from "../dto/update-product.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[PRODUCT]")
@Controller("product")
export class ProductController {
    constructor(private productService:ProductService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreateProductDto): Promise<ProductEntity> {
        return this.productService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<ProductEntity[]> {
        return this.productService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query("id") id: string): Promise<ProductEntity> {
        return this.productService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query("id") id: string,@Body() updateEntityDto: UpdateProductDto): Promise<UpdateResult> {
        return this.productService.updateEntity(id, updateEntityDto)
    }
}