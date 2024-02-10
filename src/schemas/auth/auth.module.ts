import {Module} from "@nestjs/common";
import {PostgresModule} from "../../common/database/postgres.module";
import {UserRepository} from "./user/repositories/user.repository";
import {UserService} from "./user/services/user.service";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtEnum} from "../../configuration/jwt/jwt.enum";
import {SmsModule} from "../../utility/sms/sms.module";
import {AuthService} from "./authentication/services/auth.service";
import {AuthController} from "./authentication/controller/auth.controller";
import {AddressController} from "./address/controllers/address.controller";
import {StateController} from "./address/controllers/state.controller";
import {CityController} from "./address/controllers/city.controller";
import {AddressRepository} from "./address/repositories/address.repository";
import {AddressService} from "./address/services/address.service";
import {StateRepository} from "./address/repositories/state.repository";
import {StateService} from "./address/services/state.service";
import {CityRepository} from "./address/repositories/city.repository";
import {CityService} from "./address/services/city.service";
import {ProfileRepository} from "./profile/repositories/profile.repository";
import {ProfileService} from "./profile/services/profile.service";

@Module({
    imports:[SmsModule,PostgresModule,JwtModule.registerAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        useFactory:(configService:ConfigService)=>({
            secret:configService.get(JwtEnum.secret)
        })
    })],
    providers:[UserRepository,UserService,AuthService,AddressRepository,AddressService,
        StateRepository,StateService,CityRepository,CityService,ProfileRepository,ProfileService],
    controllers:[AuthController,AddressController,StateController,CityController]
})
export class AuthModule {

}