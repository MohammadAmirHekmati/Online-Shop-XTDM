import {registerAs} from "@nestjs/config";
import * as process from "process";

export default registerAs("app",()=>({
    port:process.env.APP_PORT,
    globalPrefix:process.env.APP_API_PREFIX
}))