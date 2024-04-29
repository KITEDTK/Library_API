import { Router } from "express";
import BooksController from "./BooksController";

const router = Router();

router.post("/bookCategories/:bookCategoryId",BooksController.addBooks);

export default router;