import { Request, Response } from "express";
import BookCategoriesService from "./BookCategoriesService";
import { BookCategory } from './BookCategoriesTypes';

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
async function getBookCategoriesByLocations(req: Request, res: Response){
  try {
    const {locationId} = req.params;
    const result = await BookCategoriesService.getBooksByBookCategories(locationId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getBooksOrderIssue(req: Request, res: Response){
  try {
    const {BookCategoryId} = req.params;
    const result = await BookCategoriesService.getBooksOrderIssue(BookCategoryId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default {getAllBookCategories, getBooksByBookCategories, addBookCategories, getBookCategoriesByLocations,getBooksOrderIssue};