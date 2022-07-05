import { DataSourceOptions } from "typeorm";

export const ormconfig: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  logging: false,
};
