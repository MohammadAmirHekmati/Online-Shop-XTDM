import {Module} from "@nestjs/common";
import {GroupController} from "./group/controller/group.controller";
import {CategoryController} from "./category/controllers/category.controller";
import {CategoryRepository} from "./category/repositories/category.repository";
import {CategoryService} from "./category/services/category.service";
import {GroupRepository} from "./group/repository/group.repository";
import {GroupService} from "./group/services/group.service";
import {PostgresModule} from "../../common/database/postgres.module";
import {AttributeController} from "./attribute/controller/attribute.controller";
import {AttributeRepository} from "./attribute/repositories/attribute.repository";
import {AttributeService} from "./attribute/services/attribute.service";
import {AttributeGroupController} from "./attribute-group/controllers/attribute-group.controller";
import {AttributeGroupRepository} from "./attribute-group/repositories/attribute-group.repository";
import {AttributeGroupService} from "./attribute-group/services/attribute-group.service";
import {ProductController} from "./product/controllers/product.controller";
import {ProductRepository} from "./product/repositories/product.repository";
import {ProductService} from "./product/services/product.service";
import {PriceController} from "./price/controllers/price.controller";
import {PriceRepository} from "./price/repositories/price.repository";
import {PriceService} from "./price/services/price.service";
import {AttributeValueController} from "./attribute-value/controllers/attribute-value.controller";
import {AttributeValueRepository} from "./attribute-value/repositories/attribute-value.repository";
import {AttributeValueService} from "./attribute-value/services/attribute-value.service";
import {BrandController} from "./brand/controller/brand.controller";
import {BrandRepository} from "./brand/repository/brand.repository";
import {BrandService} from "./brand/services/brand.service";

@Module({
    imports:[PostgresModule],
    controllers:[CategoryController,GroupController,AttributeController,AttributeGroupController,
        ProductController,PriceController,AttributeValueController,BrandController],
    providers:[CategoryRepository,CategoryService,GroupRepository,GroupService,AttributeRepository,AttributeService,
        AttributeGroupRepository,AttributeGroupService,ProductRepository,ProductService,PriceRepository,PriceService,
        AttributeValueRepository,AttributeValueService,BrandRepository,BrandService]
})
export class ProductModule {
    
}