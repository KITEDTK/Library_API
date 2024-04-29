import { PrismaClient } from "@prisma/client";
import { BooksArray } from "./BooksTypes";
const prisma = new PrismaClient();

async function addBooks(input: BooksArray, bookCategoryId: string){
    const {...rest} = input;
    const checkExistbookCategory = await prisma.bookCategories.findUnique({
        where:{
            id: bookCategoryId
        }
    });
    if(checkExistbookCategory){
        throw 'error bookcategory does not exist'; 
    }
    const arrayInput:BooksArray = rest.map((b)=>{
        return {
            ...b,
            bookCategoryId: bookCategoryId
        }
    });
    const result = await prisma.books.createMany({
        data: {
            ...arrayInput
        }
    });
    return result;
}

export default {addBooks};