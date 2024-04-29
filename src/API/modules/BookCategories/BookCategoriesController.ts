import { Request, Response } from "express";
import BookCategoriesService from "./BookCategoriesService";

async function getAllBookCategories(req: Request, res: Response){
    try {
        const result = await BookCategoriesService.getAllBookCategories();
        res.send(result);
      } catch (err) {
        console.log(err);
      }
}
async function getBooksByBookCategories(req: Request, res: Response){
    try {
        const {bookCategoryId} = req.params;
        const result = await BookCategoriesService.getBooksByBookCategories(bookCategoryId);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
}
async function addBookCategories(req: Request, res: Response){
    try {
        const result = await BookCategoriesService.add(req.body);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
}

export default {getAllBookCategories, getBooksByBookCategories, addBookCategories};