export interface Issue{
    creatorId: string;
    createBy: string;
}
export interface OrderDetail{
    orderId : string;
    bookId: string;
    createDate?: Date;
    dueDate?: Date;
}
export interface OrderDetailArray extends Array<OrderDetail>{}