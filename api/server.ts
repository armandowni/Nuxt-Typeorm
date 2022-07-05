import "reflect-metadata";
import * as router from "./src/index";
import { DataSource } from "typeorm";
import { ormconfig } from "./ormconfig";

async function server() {
  const AppDataSource = new DataSource(ormconfig);

  await AppDataSource.initialize()
    .then(() => console.log(""))
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return router;
}

export default server;
