import { PrismaClient } from "@prisma/client";
import { Issue } from './OrderTypes';
import { OrderDetailArray } from "./OrderTypes";

const prisma = new PrismaClient();

async function getOrdersByStatus(status: string){
    const orders = await prisma.orders.findMany({
        where:{
            status: status === 'true' ? true : false
        }
    });
    return orders;
}
async function getOrderDetailByOrder(orderId: string, status: string){
    const orderDetails = await prisma.orderDetail.findMany({
        where:{
            orderId: orderId,
            Orders:{
                status: status === 'true' ? true : false
            }
        }
    });
    return orderDetails;
}
async function createIssue(input: Issue){
    const {creatorId, createBy} = input;
    const checkExistCreator = await prisma.users.findUnique({
        where: { 
            id: creatorId
        }
    });
    if(!checkExistCreator){
        throw 'error';
    }
    const checkExistCreateBy = await prisma.users.findUnique({
        where:{
            id: createBy
        }
    });
    if(!checkExistCreateBy){
        throw 'error';
    }
    const issue = await prisma.orders.create({
        data: input
    })
    return issue;
}
async function createDetailIssue(input: OrderDetailArray, orderId: string){
    const arrayInput = input.map((od)=>{
        return {
            ...od,
            orderId: orderId
        }
    });
    const result = await prisma.orderDetail.createMany({
        data: arrayInput
    });
    return result;
}
export default {getOrdersByStatus, getOrderDetailByOrder, createIssue, createDetailIssue};