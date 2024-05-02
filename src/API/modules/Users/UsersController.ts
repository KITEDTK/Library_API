import { Request, Response } from "express";
import UsersService from "./UsersService";
import { UserArray } from "./UsersType";

async function createManyUsers(req: Request, res: Response) {
  try {
    const usersBody: UserArray = req.body;
    const result = await UsersService.createManyUsers(usersBody);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await UsersService.updateUser(req.body, userId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function deleteUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await UsersService.deleteUser(userId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllUsers(req: Request, res: Response) {
  try {
    const result = await UsersService.getAllUsers();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getSingleUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await UsersService.getSingleUser(userId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function createUserRoles(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await UsersService.createUserRoles(userId, req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function updateUserRoles(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await UsersService.updateUserRoles(userId, req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default {
  createManyUsers,
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  createUserRoles,
  updateUserRoles
};
