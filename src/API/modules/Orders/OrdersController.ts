import { Request, Response } from "express";
import OrdersService from "./OrdersService";

async function getOrdersByStatus(req: Request, res: Response) {
  try {
    const { status } = req.params;
    const result = await OrdersService.getOrdersByStatus(status);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getOrderDetailByOrderId(req: Request, res: Response) {
  try {
    const { status, orderId } = req.params;
    const result = await OrdersService.getOrderDetailByOrder(orderId, status);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function createIssue(req: Request, res: Response) {
  try {
    const result = await OrdersService.createIssue(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function createIssueDetail(req: Request, res: Response){
  try {
    const {orderId} = req.params;
    const result = await OrdersService.createDetailIssue(req.body,orderId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default { getOrdersByStatus, getOrderDetailByOrderId, createIssue,createIssueDetail };
