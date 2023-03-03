import { Request, Response } from "express";
import { AppDataSource } from "../../../data-source";
import { Test } from "../../../src/db/entities/Test";

const testRepository = AppDataSource.getRepository(Test);

export async function get(req: Request, res: Response) {
  const result = await testRepository.findAndCount();
  // console.log(result[0]);

  res.send(result);
}

export async function post(req: Request, res: Response) {
  const data = req.body;
  data.status |= 1
  if (Object.keys(data).length == 0) throw new Error("data cannot empty");

  const result = await testRepository.save(data);
  res.send(result);
}

