import { Router } from "express";
import LocationsController from "./LocationsController";
const router = Router();

router.get("/:id", LocationsController.getAll);
router.post("/root",LocationsController.createRootlocation);
router.post("/:locationId/tree", LocationsController.createChildLocation);
router.patch("/:locationId", LocationsController.updateLocation);
router.delete("/:locationId", LocationsController.deleteLocation);

export default router;