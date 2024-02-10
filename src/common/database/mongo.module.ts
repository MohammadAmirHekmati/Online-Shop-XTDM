import {Module} from "@nestjs/common";
import {RedisModule} from "../redis/redis.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongoEnum} from "../../configuration/mongo/mongo.enum";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostgresEnum} from "../../configuration/postgres/postgres.enum";

@Module({
    imports:[MongooseModule.forRootAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>({
            uri:configService.get(MongoEnum.URI),
            dbName:configService.get(MongoEnum.DBNAME),
            pass:configService.get(MongoEnum.PASS),
            user:configService.get(MongoEnum.USER)
        })
    })]
})
export class MongoModule {

}