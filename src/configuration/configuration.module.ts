import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import appConfiguration from "./app/app.configuration";
import {envValidationSchema} from "../common/envs/env.validation";
import swaggerConfiguration from "./swagger/swagger.configuration";
import {SwaggerService} from "./swagger/swagger.service";
import redisConfiguration from "./redis/redis.configuration";
import mongoConfiguration from "./mongo/mongo.configuration";
import postgresConfiguration from "./postgres/postgres.configuration";
import jwtConfiguration from "./jwt/jwt.configuration";

@Module({
    imports:[ConfigModule.forRoot({
        envFilePath:`${process.cwd()}/src/common/envs/.${process.env.NODE_ENV}.env`,
        load:[appConfiguration,swaggerConfiguration,redisConfiguration,mongoConfiguration,postgresConfiguration,jwtConfiguration],
        isGlobal:true,
        validationSchema:envValidationSchema
    })],
    providers:[SwaggerService]
})
export class ConfigurationModule {

}