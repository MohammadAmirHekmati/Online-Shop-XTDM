import {Injectable} from "@nestjs/common";
import {AttributeRepository} from "../repositories/attribute.repository";
import {CreateAttributeDto} from "../dto/create-attribute.dto";
import {AttributeEntity} from "../entity/attribute.entity";
import {UpdateAttributeDto} from "../dto/update-attribute.dto";
import {UpdateResult} from "typeorm";

@Injectable()
export class AttributeService {
    constructor(private attributeRepository:AttributeRepository) {
    }

    async createEntity(createEntityDto: CreateAttributeDto): Promise<AttributeEntity> {
        return await this.attributeRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<AttributeEntity[]> {
        return await this.attributeRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<AttributeEntity> {
        return await this.attributeRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: UpdateAttributeDto): Promise<UpdateResult> {
        return await this.attributeRepository.updateEntity(id, updateEntityDto)
    }
}