import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

const DB = nuxtConfig.env.DB;
export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  username: DB.username,
  host: DB.host,
  password: DB.password,
  database: DB.database,
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  // extra: !DB.database ? null : DB.extra,
};
