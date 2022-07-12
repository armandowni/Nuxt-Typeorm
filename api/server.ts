import "reflect-metadata";
import * as router from "./src/index";
import { AppDataSource } from "./data-source";

async function server() {
  await AppDataSource.initialize()
    .then((conn) => {
      console.log(`server is run`);
      console.log(conn.isInitialized);
    })
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return router;
}

export default server;
