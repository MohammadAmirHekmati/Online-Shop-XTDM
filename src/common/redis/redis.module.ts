import {DynamicModule, Module, Provider} from "@nestjs/common";
import {RedisConstant} from "./redis.constant";
import {createClient} from "redis";
import {ConfigService} from "@nestjs/config";
import {RedisEnum} from "../../configuration/redis/redis.enum";
import {RedisService} from "./redis.service";

@Module({})
export class RedisModule {
    static register():DynamicModule{
        const connectionProvider:Provider={
            provide:RedisConstant,
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>{
                const  host=configService.get(RedisEnum.HOST)
                const port=configService.get(RedisEnum.PORT)
                const client=createClient({url:`redis://${host}:${port}`})
                    .on('error', err => {
                        console.log("Redis Server Unexpected Closed...!")
                    })
                    .connect();
                return client
            }
        }
        return {
            module:RedisModule,
            providers:[connectionProvider,RedisService],
            exports:[RedisService],
            global:true
        }
    }
}