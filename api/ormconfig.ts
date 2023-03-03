import { DataSourceOptions } from "typeorm";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: DB?.host || "localhost",
  username: DB?.username || "postgres",
  password: DB?.password || "admin123",
  database: DB?.database || "postgres",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
};
