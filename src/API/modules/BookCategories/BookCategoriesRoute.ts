import { Router } from "express";
import BookCategoriesController from "./BookCategoriesController";

const router = Router();

router.get("/",BookCategoriesController.getAllBookCategories);
router.get("/:bookCategoryId/books",BookCategoriesController.getBooksByBookCategories);
router.post("/",BookCategoriesController.addBookCategories);

export default router;