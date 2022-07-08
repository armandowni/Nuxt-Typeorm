import "reflect-metadata";
import * as router from "./src/index";
import {AppDataSource} from "./data-source"


async function server() {
  await AppDataSource.initialize()
    .then((connection) => {
      console.log(`server is run`);
    })
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return router;
}

export default server;
