const config = require("./ormconfig");

async function server() {
  await config
    .initialize()
    .then(() => console.log("Data Source has been initialized!"))
    .catch((err) =>
      console.error("Error during Data Source initialization:", err)
    );

  return
}

module.exports = server
