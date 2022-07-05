import { Request, Response } from "express";

export async function get(req: Request, res: Response) {
  // console.log(User);

  res.send("success login user");
}
