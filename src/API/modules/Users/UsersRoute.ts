import { Router } from "express";
import UsersController from "./UsersController";

const router = Router();

router.post("/", UsersController.createManyUsers);
router.patch("/:userId", UsersController.updateUser);
router.delete("/:userId",UsersController.deleteUser);
router.get("/",UsersController.getAllUsers);
router.get("/:userId",UsersController.getSingleUser);
router.post("/:userId/roles",UsersController.createUserRoles);
router.patch("/:userId/roles",UsersController.updateUser);

export default router;
