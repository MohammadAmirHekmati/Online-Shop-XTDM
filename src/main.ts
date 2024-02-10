import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {AppEnum} from "./configuration/app/app.enum";
import {SwaggerService} from "./configuration/swagger/swagger.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"*"})

  const configService=app.get<ConfigService>(ConfigService)
  const appPort=configService.get(AppEnum.PORT)
  const appGlobalPrefix=configService.get(AppEnum.GLOBAL_PREFIX)

  const swaggerService=app.get<SwaggerService>(SwaggerService)
  app.setGlobalPrefix(appGlobalPrefix)

  // app.useGlobalGuards(new JwtGuard())

  swaggerService.init(app)
  await app.listen(appPort);

}
bootstrap();
