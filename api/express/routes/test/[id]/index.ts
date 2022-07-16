import { Request, Response } from "express";
import { AppDataSource } from "../../../../data-source";
import { Test } from "../../../../src/db/entities/Test";

const testRepository = AppDataSource.getRepository(Test);

export async function put(req: Request, res: Response) {
    const data = req.body;
    const id = req.params.id;
    console.log(data);
  
    if (Object.keys(data).length == 0) throw new Error("data cannot empty");
  
    if(!id) throw new Error("data should have id");
  
    const result = await testRepository.update(id, data);
  
    res.send({message:"Success update data"});
  }
  export async function del(req: Request, res: Response) {
    // console.log(User);
  
    res.send("success delete hello");
  }