import { Router } from "express";
import UsersController from "./UsersController";

const router = Router();

router.post("/", UsersController.createManyUsers);

export default router;
