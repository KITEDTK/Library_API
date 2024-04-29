import { Router } from "express";
import OrdersController from "./OrdersController";
const router = Router();

router.get("/",OrdersController.getOrdersByStatus);
router.get("/:orderId/:status/orderDetail",OrdersController.getOrderDetailByOrderId);
router.post("/issue",OrdersController.createIssue);
router.post("/:orderId/orderDetails",OrdersController.createIssueDetail);

export default router;