import { PrismaClient } from "@prisma/client";
import { seachBookCategory, BookCategoryArray } from "./BookCategoriesTypes";
import { Books } from '../Books/BooksTypes';
const prisma = new PrismaClient();

async function getAllBookCategories() {
  const bookCategories = await prisma.bookCategories.findMany();
  return bookCategories;
}
async function getBooksByBookCategories(bookCategoryId: string) {
  const books = await prisma.bookCategories.findMany({
    where: {
      id: bookCategoryId,
    },
    include: {
      Books: {
        where: {
          bookCategoryId: bookCategoryId,
        },
      },
    },
  });
  return books;
}
async function search(input: seachBookCategory) {
  const {
    name,
    fullText,
    ISBN,
    language,
    UDC,
    author,
    title,
    edition,
    publisher,
    publishingPlace,
    pulishingYear,
    numberPage,
    size,
    coAuthor,
    barcode,
    location,
  } = input;
  const locationId = await prisma.locations.findFirst({
    where: {
      name: location,
    },
    select: {
      id: true,
    },
  });
  const result = await prisma.bookCategories.findMany({
    where: {
      ...(name ? { name: name } : {}),
      ...(fullText ? { fullText: fullText } : {}),
      ...(ISBN ? { ISBN: ISBN } : {}),
      ...(author ? { author: author } : {}),
      ...(title ? { title: title } : {}),
      ...(edition ? { edition: edition } : {}),
      ...(publisher ? { publisher: publisher } : {}),
      ...(publishingPlace ? { pulishingPlace: publishingPlace } : {}),
      ...(pulishingYear ? { pulishingYear: pulishingYear } : {}),
      ...(numberPage ? { numberPage: numberPage } : {}),
      ...(size ? { size: size } : {}),
      ...(coAuthor ? { coAuthor: coAuthor } : {}),
      GeneralTypes_BookCategories_languageIdToGeneralTypes: {
        ...(language ? { name: language } : {}),
      },
      GeneralTypes_BookCategories_UDCToGeneralTypes: {
        ...(UDC ? { name: UDC } : {}),
      },
      Books: {
        some: {
          ...(locationId !== null ? { locationId: locationId.id } : {}),
          ...(barcode ? { barCode: barcode } : {}),
        },
      },
    },
  });

  return result;
}
async function add(input: BookCategoryArray) {
  const { ...rest } = input;
  rest.map(async (bc) => {
    if (bc.UDC) {
      const checkExistUDC = await prisma.generalTypes.findFirst({
        where: {
          name: bc.UDC,
        },
      });
      if (!checkExistUDC) {
        throw "error at" + bc;
      }
    }
    if (bc.language) {
      const checkExistLanguage = await prisma.generalTypes.findFirst({
        where: {
          name: bc.language,
        },
      });
      if (!checkExistLanguage) {
        throw "error at" + bc;
      }
    }
  });
  const result = await prisma.bookCategories.createMany({
    data: {
      ...rest,
    },
  });
  return result;
}
async function bookCategoriesByLocations(locationId: string) {
  const locationIds: Array<any> = await prisma.$queryRaw`WITH allLocations AS (
    SELECT id
    FROM Locations
    WHERE id = ${locationId} 
    UNION ALL
    SELECT c.id
    FROM Locations c
    INNER JOIN allLocations a ON c.parentId = a.id
)
SELECT id FROM allLocations`;
  const result = await prisma.bookCategories.findMany({
    where: {
      Books: {
        some: {
          locationId: { in: locationIds },
        },
      },
    },
  });
  return result;
}
async function getBooksOrderIssue(bookCategoryId: string) {
  const checkExist = await prisma.bookCategories.findUnique({
    where:{
      id: bookCategoryId
    }
  });
  if(!checkExist){
    throw 'error';
  }
  const booksIds = await prisma.books.findMany({
    where:{
      bookCategoryId: bookCategoryId,
    },
    select:{
      id: true
    }
  });
  let issued:Array<any> = [];
  let free:Array<any> = [];
  booksIds.forEach(async(b)=>{
    const order = await prisma.orderDetail.findFirst({
      where:{
        bookId: b.id,
        isCheck: true,
        returnDate: null
      }
    });
    if(order){
      issued.push(b);
    }else{
      free.push(b);
    }
  });
  return {issued: issued, free: free}
}
export default {
  getAllBookCategories,
  getBooksByBookCategories,
  search,
  add,
  bookCategoriesByLocations,
  getBooksOrderIssue
};
