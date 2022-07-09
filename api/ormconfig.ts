import { DataSourceOptions } from "typeorm";
import { entities } from "./src/db";
import Test from "./src/db/entities/Test";

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: false,
  logging: false,
  entities: [Test],
  migrations: ["src/migration/*.{ts,js}"],
};
