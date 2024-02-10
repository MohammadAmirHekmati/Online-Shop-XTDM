import {registerAs} from "@nestjs/config";
import * as process from "process";

export default registerAs("mongo",()=>({
    uri:process.env.MONGO_URI,
    dbName:process.env.MONGO_DBNAME,
    user:process.env.MONGO_USER,
    pass:process.env.MONGO_PASS
}))