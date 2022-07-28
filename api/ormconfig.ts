import { DataSourceOptions } from "typeorm";
import {
  DB_CONFIG_DATABASE,
  DB_CONFIG_HOST,
  DB_CONFIG_PASSWORD,
  DB_CONFIG_PORT,
  DB_CONFIG_USER,
} from "../modules/const";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: DB_CONFIG_HOST,
  port: DB_CONFIG_PORT,
  username: DB_CONFIG_USER,
  password: DB_CONFIG_PASSWORD,
  database: DB_CONFIG_DATABASE,
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
