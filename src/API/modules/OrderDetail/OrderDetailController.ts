import { Request, Response } from "express";

import OrderDetailService from "./OrderDetailService";

async function returnBook(req: Request, res: Response) {
  try {
    const { barcode } = req.params;
    const result = await OrderDetailService.returnBook(barcode);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default { returnBook };
