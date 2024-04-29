import { Request, Response } from "express";

import BooksService from "./BooksService";

async function addBooks(req: Request, res: Response){
    try {
        const {bookCategoryId} = req.params;
        const result = await BooksService.addBooks(req.body,bookCategoryId);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
}
export default {addBooks};