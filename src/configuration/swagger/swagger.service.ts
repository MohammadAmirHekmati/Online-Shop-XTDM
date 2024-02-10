import {INestApplication, Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {SwaggerEnum} from "./swagger.enum";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

@Injectable()
export class SwaggerService {
    constructor(private configService:ConfigService){}

    get title():string{
        return this.configService.get(SwaggerEnum.TITLE)
    }

    get description():string{
        return this.configService.get(SwaggerEnum.DESCRIPTION)
    }


    get version():string{
        return this.configService.get(SwaggerEnum.VERSION)
    }


    get prefix():string{
        return this.configService.get(SwaggerEnum.PREFIX)
    }


    get tag():string{
        return this.configService.get(SwaggerEnum.TAG)
    }

    init(app:INestApplication){
        const config = new DocumentBuilder()
            .setTitle(this.title)
            .setDescription(this.description)
            .setVersion(this.version)
            .addBearerAuth(
                { type: 'http', scheme: 'Bearer', bearerFormat: 'Token', in: 'header' },
                'access-token',
            )
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup(this.prefix, app, document);

    }
}