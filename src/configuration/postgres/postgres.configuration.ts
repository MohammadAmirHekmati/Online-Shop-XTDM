import {registerAs} from "@nestjs/config";
import * as process from "process";

export default registerAs("postgres",()=>({
    host:process.env.POSTGRES_HOST,
    port:process.env.POSTGRES_PORT,
    username:process.env.POSTGRES_USERNAME,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DATABASE,
    synchronize:process.env.SYNCHRONIZE,
    distLoadPattern:process.env.DIST_LOAD_PATTERN,
    tsLoadPattern:process.env.TS_LOAD_PATTER
}))