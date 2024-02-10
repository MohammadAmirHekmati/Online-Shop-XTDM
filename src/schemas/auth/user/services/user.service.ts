import {Injectable} from "@nestjs/common";
import {UserRepository} from "../repositories/user.repository";
import {CreateUserDto} from "../dto/create-user.dto";
import {Promise} from "mongoose";
import {UserEntity} from "../entities/user.entity";
import {UpdateResult} from "typeorm";

@Injectable()
export class UserService {
    constructor(private userRepository:UserRepository) {
    }

    async createEntity(createEntityDto: CreateUserDto): Promise<UserEntity> {
        return await this.userRepository.createEntity(createEntityDto)
    }

    async findAllEntities(): Promise<UserEntity[]> {
        return await this.userRepository.findAllEntities()
    }

    async findOneEntity(id: string): Promise<UserEntity> {
        return await this.userRepository.findOneEntity(id)
    }

    async updateEntity(id: string, updateEntityDto: any): Promise<UpdateResult> {
        return await this.userRepository.updateEntity(id,updateEntityDto)
    }

    async findUserByMobile(mobile:string){
        return await this.userRepository.findUserByMobile(mobile)
    }

    async updatePassword(id:string,password:string){
        return await this.userRepository.updatePassword(id, password)
    }
}