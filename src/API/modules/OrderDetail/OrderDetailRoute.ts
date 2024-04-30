import { Router } from "express";
import OrderDetailController from "./OrderDetailController";

const router = Router();

router.patch("/:barcode", OrderDetailController.returnBook);

export default router;