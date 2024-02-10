import {UpdateResult} from "typeorm";

export interface RepositoryAbstract<Entity,CreateDto,UpdateDto>{
    createEntity(createEntityDto: CreateDto): Promise<Entity>;

    updateEntity(id: string, updateEntityDto: UpdateDto): Promise<UpdateResult>;
    findOneEntity(id: string): Promise<Entity>;
    findAllEntities(): Promise<Entity[]>;
}