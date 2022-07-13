import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Test } from "../../src/db/entities/Test";

export async function get(req: Request, res: Response) {
  const hello = AppDataSource.getRepository(Test);
  const result = await hello.find();
  // console.log(result[0]);

  res.send(result);
}

export async function post(req: Request, res: Response) {
  // console.log(User);

  res.send("success de; hello");
}
export async function put(req: Request, res: Response) {
  // console.log(User);

  res.send("success put hello");
}
export async function del(req: Request, res: Response) {
  // console.log(User);

  res.send("success delete hello");
}
