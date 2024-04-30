import { Router } from "express";
import LocationsController from "./LocationsController";
const router = Router();

router.get("/:id", LocationsController.getAll);
router.post("locations/root",LocationsController.createRootlocation);

export default router;