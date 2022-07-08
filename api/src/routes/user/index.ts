import { Router, Request, Response } from "express";
import { User } from "../../db/entities/User";

export async function get(req: Request, res: Response) {
  // getConnection()
  //   .manager.getRepository(User)
  //   .find()
  //   .then((result) => {
  //     console.log(result);
  //   });
  res.send("success get user");
}
