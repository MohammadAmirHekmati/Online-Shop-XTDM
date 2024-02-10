import * as joi from "joi"

export const envValidationSchema=joi.object({
    //APP
    APP_PORT:joi.number().required(),
    APP_API_PREFIX:joi.string().required(),


    //SWAGGER
    SWAGGER_TITLE:joi.string().required(),
    SWAGGER_DESCRIPTION:joi.string().required(),
    SWAGGER_PREFIX:joi.string().required(),
    SWAGGER_VERSION:joi.string().required(),
    SWAGGER_TAG:joi.string().required(),

    //REDIS
    REDIS_HOST:joi.string().required(),
    REDIS_PORT:joi.number().required(),

    //MONGO
    MONGO_URI:joi.string().required(),
    MONGO_USER:joi.optional(),
    MONGO_PASS:joi.optional(),
    MONGO_DBNAME:joi.string().required(),

    //POSTGRES
    POSTGRES_HOST:joi.string().required(),
    POSTGRES_PORT:joi.number().required(),
    POSTGRES_USERNAME:joi.string().required(),
    POSTGRES_PASSWORD:joi.string().required(),
    POSTGRES_DATABASE:joi.string().required(),
    SYNCHRONIZE:joi.boolean().required()
})