const { DataSource } = require("typeorm");

const config = {
  migrationsTableName: "migrations",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "testingdb",
  synchronize: true,
  logging: false,
  entities: ["./src/entities/table/*.ts"],
  migrations: ["./src/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: "./src/migration",
  },
};

export const AppDataSource = new DataSource(config);
