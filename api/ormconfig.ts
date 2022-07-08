import { DataSourceOptions } from "typeorm";
import { entities } from "./src/db";

export const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  entities: entities,
  migrations: ["src/migration/**/*.{ts,js}"],
};
