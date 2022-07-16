import { DataSourceOptions } from "typeorm";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "test",
  synchronize: false,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
};
