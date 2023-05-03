import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./src/db";

const DB = nuxtConfig.env?.DB;
export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: "ep-red-haze-407643-pooler.ap-southeast-1.aws.neon.tech",
  username: "armandowni",
  password: "Yd3V0reLyQDx",
  database: "personal",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
};
