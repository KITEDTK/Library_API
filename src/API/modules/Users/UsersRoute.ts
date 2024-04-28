import { Router } from "express";
import UsersController from "./UsersController";

const router = Router();

router.post("/", UsersController.createManyUsers);
router.patch("/:userId", UsersController.updateUser);
router.delete("/:userId",UsersController.deleteUser);
router.get("/",UsersController.getAllUsers);
router.get("/:userId",UsersController.getSingleUser);

export default router;
