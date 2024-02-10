import {Provider} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {DataSource} from "typeorm";
import {PostgresEnum} from "../../configuration/postgres/postgres.enum";

export const PostgresProviderConstant="POSTGRES_CONNECTION"
export const PostgresProvider:Provider={
    provide:PostgresProviderConstant,
    inject:[ConfigService],
    useFactory:async (configService:ConfigService)=>{
        const postgresDataSource=new DataSource({
            type:"postgres",
            host:configService.get(PostgresEnum.HOST),
            port:configService.get(PostgresEnum.PORT),
            username:configService.get(PostgresEnum.USERNAME),
            password:configService.get(PostgresEnum.PASSWORD),
            database:configService.get(PostgresEnum.DATABASE),
            synchronize:configService.get(PostgresEnum.SYNCHRONIZE),
            entities:['dist/**/*.entity.js', '**/*.entity.js']
        })

        await postgresDataSource.initialize()
        return postgresDataSource
    }
}