import {  Request, Response } from "express";
import UsersService from "./UsersService";

async function createManyUsers(req: Request, res: Response) {
  try {
    const result = await UsersService.createManyUsers(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default {createManyUsers}
