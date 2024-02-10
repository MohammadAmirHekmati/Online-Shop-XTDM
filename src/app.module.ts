import { Module } from '@nestjs/common';
import {ConfigurationModule} from "./configuration/configuration.module";
import {MongoModule} from "./common/database/mongo.module";
import {RedisModule} from "./common/redis/redis.module";
import {ProductModule} from "./schemas/product/product.module";
import {AuthModule} from "./schemas/auth/auth.module";

@Module({
  imports: [AuthModule,ProductModule,ConfigurationModule,MongoModule,RedisModule.register()]
})
export class AppModule {}
