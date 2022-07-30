import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  username: nuxtConfig.privateRuntimeConfig.DB_USERNAME || "postgres",
  port: nuxtConfig.privateRuntimeConfig.DB_PORT ||5432,
  host: nuxtConfig.privateRuntimeConfig.DB_HOST || "localhost",
  password: nuxtConfig.privateRuntimeConfig.DB_PASSWORD || "admin123",
  database: nuxtConfig.privateRuntimeConfig.DB_DATABASE || "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
};
