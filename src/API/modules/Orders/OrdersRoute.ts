import { Router } from "express";
import OrdersController from "./OrdersController";
const router = Router();

router.get("/",OrdersController.getOrdersByStatus);
router.get("/:orderId/:status/orderDetail",OrdersController.getOrderDetailByOrderId);

export default router;