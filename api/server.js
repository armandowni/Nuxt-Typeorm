const config = require("./ormconfig");

config
  .initialize()
  .then(() => console.log("Data Source has been initialized!"))
  .catch((err) =>
    console.error("Error during Data Source initialization:", err)
  );

module.exports = config;
