import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function returnBook(barcode: string){
    const orderId = await prisma.orderDetail.findFirst({
        where:{
            Books:{
                barCode : barcode,
            },
            returnDate: null
        },
        select:{
            id: true
        }
    });
    if(!orderId){
        return 'error';
    }
    const result = await prisma.orderDetail.update({
        where:{
            id: orderId.id,
            Books:{
                barCode: barcode
            }
        },
        data:{
            returnDate: new Date()
        }
    });
    return result;
}

export default {returnBook};