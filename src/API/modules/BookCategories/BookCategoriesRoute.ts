import { Router } from "express";
import BookCategoriesController from "./BookCategoriesController";

const router = Router();

router.get("/",BookCategoriesController.getAllBookCategories);
router.get("/:bookCategoryId/books",BookCategoriesController.getBooksByBookCategories);
router.post("/",BookCategoriesController.addBookCategories);
router.get("/locations/:locationId", BookCategoriesController.getBookCategoriesByLocations);
router.get("/:bookCategoryId", BookCategoriesController.getBooksOrderIssue);
router.post("/search", BookCategoriesController.search);

export default router;