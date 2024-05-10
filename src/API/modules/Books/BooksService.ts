import { PrismaClient } from "@prisma/client";
import { BooksArray } from "./BooksTypes";
const prisma = new PrismaClient();

async function addBooks(input: BooksArray, bookCategoryId: string){
    const checkExistbookCategory = await prisma.bookCategories.findUnique({
        where:{
            id: bookCategoryId
        }
    });
    if(!checkExistbookCategory){
        throw 'error bookcategory does not exist'; 
    }
    const arrayInput:BooksArray = input.map((b)=>{
        return {
            ...b,
            bookCategoryId: bookCategoryId
        }
    });
    const result = await prisma.books.createMany({
        data: [...arrayInput]
    });
    return result;
}

export default {addBooks};