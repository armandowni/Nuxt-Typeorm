import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  username: "postgres",
  port: 5432,
  host: "localhost",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  ...nuxtConfig.privateRuntimeConfig.DB_SSL,
};
