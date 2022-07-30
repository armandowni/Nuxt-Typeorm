import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  username:
    process.env.NODE_ENV == "production"
      ? nuxtConfig.privateRuntimeConfig.DB_USERNAME
      : "postgres",
  port: process.env.NODE_ENV == "production"?nuxtConfig.privateRuntimeConfig.DB_PORT : 5432,
  host: process.env.NODE_ENV == "production" ? nuxtConfig.privateRuntimeConfig.DB_HOST : "localhost",
  password: process.env.NODE_ENV == "production" ? nuxtConfig.privateRuntimeConfig.DB_PASSWORD : "admin123",
  database: process.env.NODE_ENV == "production" ? nuxtConfig.privateRuntimeConfig.DB_DATABASE : "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  ...nuxtConfig.privateRuntimeConfig.DB_SSL,
};
