import { Router, Request, Response } from "express";
import { User } from "../../src/entities/table/user";
import config from "../../server";

const route = Router();

route.get("/", async (req: Request, res: Response) => {
  console.log(User);

  res.send("success get user");
});

module.exports = route;
