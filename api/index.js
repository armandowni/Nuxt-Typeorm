const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const server = require("./server");
const UserRoute = require("./routes/user");

app.set("trust proxy", 1);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/v1", (req, res) => {
  server().then((s) => {
    res.send("success test")
  }).catch((err) => {
    console.log(err);
    res.status(500).send("oops... internal server error");
  })
})

app.use("/user", UserRoute);

module.exports = {
  path: "/api",
  handler: app,
};
