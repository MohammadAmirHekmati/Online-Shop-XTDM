import {Body, Controller, Get, Patch, Post, Query} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {CategoryService} from "../services/category.service";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {CategoryEntity} from "../entities/category.entity";
import {UpdateCategoryDto} from "../dto/update-category.dto";
import {UpdateResult} from "typeorm";

@ApiTags("[CATEGORY]")
@Controller("category")
export class CategoryController {
    constructor(private categoryService:CategoryService) {
    }

    @Post("create")
    createEntity(@Body() createEntityDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.categoryService.createEntity(createEntityDto)
    }

    @Get("all")
    findAllEntities(): Promise<CategoryEntity[]> {
        return this.categoryService.findAllEntities()
    }

    @Get("one")
    findOneEntity(@Query() id: string): Promise<CategoryEntity> {
        return this.categoryService.findOneEntity(id)
    }

    @Patch("update")
    updateEntity(@Query() id: string, @Body() updateEntityDto: UpdateCategoryDto): Promise<UpdateResult> {
        return this.categoryService.updateEntity(id, updateEntityDto)
    }
}