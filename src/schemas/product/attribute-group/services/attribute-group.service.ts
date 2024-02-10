import {Injectable} from "@nestjs/common";
import {AttributeGroupRepository} from "../repositories/attribute-group.repository";
import {CreateAttributeGroupDto} from "../dto/create-attribute-group.dto";
import {AttributeGroupEntity} from "../entities/attribute-group.entity";
import {UpdateAttributeGroupDto} from "../dto/update-attribute-group.dto";
import {UpdateResult} from "typeorm";
import {AttributeService} from "../../attribute/services/attribute.service";
import {GroupService} from "../../group/services/group.service";

@Injectable()
export class AttributeGroupService {
    constructor(private attributeGroupRepository:AttributeGroupRepository,
                private attributeService:AttributeService,
                private groupService:GroupService) {
    }

    async createEntity(createEntityDto: CreateAttributeGroupDto): Promise<AttributeGroupEntity> {
        const attribute=await this.attributeService.findOneEntity(createEntityDto.attribute_id)
        const group=await this.groupService.findOneEntity(createEntityDto.group_id)
        createEntityDto.ref_attribute=attribute
        createEntityDto.ref_group=group
        return await this.attributeGroupRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<AttributeGroupEntity[]> {
        return await this.attributeGroupRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<AttributeGroupEntity> {
        return await this.attributeGroupRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeGroupDto): Promise<UpdateResult> {
        updateEntityDto.attribute_id?updateEntityDto.ref_attribute=await this.attributeService.findOneEntity(updateEntityDto.attribute_id):undefined
        updateEntityDto.group_id?updateEntityDto.ref_group=await this.groupService.findOneEntity(updateEntityDto.group_id):undefined
        delete updateEntityDto.group_id
        delete updateEntityDto.attribute_id
        return await this.attributeGroupRepository.updateEntity(id,updateEntityDto)
    }
}