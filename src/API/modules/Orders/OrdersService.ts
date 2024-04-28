import { PrismaClient } from "@prisma/client";

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
export default {getOrdersByStatus, getOrderDetailByOrder};