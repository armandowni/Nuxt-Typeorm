import { DataSourceOptions } from "typeorm";
import database from "./const";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  ...database,
};
