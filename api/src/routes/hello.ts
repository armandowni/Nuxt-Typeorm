import { Request, Response } from "express";

export async function get(req: Request, res: Response) {
  // console.log(User);

  res.send("success get hello");
}

export async function post(req: Request, res: Response) {
  // console.log(User);

  res.send("success post hello");
}
