import { DataSourceOptions } from "typeorm";
import { entities } from "./src/db";

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
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
