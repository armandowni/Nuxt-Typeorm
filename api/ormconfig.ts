import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

const DB = nuxtConfig.env.DB;
export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  username: DB.username || "postgres",
  host: DB.host || "localhost",
  password: DB.password || "admin123",
  database: DB.database || "testingdb",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  extra: !DB.database ? null : DB.extra,
};
