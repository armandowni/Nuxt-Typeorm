import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "testingdb",
    name: "default",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
  
