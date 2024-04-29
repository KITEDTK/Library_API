import { Router } from "express";
import BookCategoriesController from "./BookCategoriesController";

const router = Router();

router.get("/",BookCategoriesController.getAllBookCategories);
router.get("/:bookCategoryId/books",BookCategoriesController.getBooksByBookCategories);

export default router;