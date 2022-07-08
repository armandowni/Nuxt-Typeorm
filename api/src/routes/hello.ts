import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Test } from "../db/entities/Test";

export async function get(req: Request, res: Response) {
  const hello = getRepository(Test);
  const result = await hello.findAndCount();
  console.log(result);
  

  res.send("success get hello");
}

export async function post(req: Request, res: Response) {
  // console.log(User);

  res.send("success post hello");
}
