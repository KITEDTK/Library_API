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
      ...(name ? { name: {contains : name} } : {}),
      ...(fullText ? { fullText: {contains: fullText} } : {}),
      ...(ISBN ? { ISBN: {contains: ISBN} } : {}),
      ...(author ? { author: {contains: author} } : {}),
      ...(title ? { title: {contains: title} } : {}),
      ...(edition ? { edition: edition } : {}),
      ...(publisher ? { publisher: {contains: publisher} } : {}),
      ...(publishingPlace ? { pulishingPlace: {contains: publishingPlace} } : {}),
      ...(pulishingYear ? { pulishingYear: pulishingYear } : {}),
      ...(numberPage ? { numberPage:  numberPage } : {}),
      ...(size ? { size: size } : {}),
      ...(coAuthor ? { coAuthor: coAuthor } : {}),
      // GeneralTypes_BookCategories_languageIdToGeneralTypes: {
      //   ...(language ? { name: language } : {}),
      // },
      // GeneralTypes_BookCategories_UDCToGeneralTypes: {
      //   ...(UDC ? { name: UDC } : {}),
      // },
      // Books: {
      //   some: {
      //     ...(locationId !== null ? { locationId: locationId.id } : {}),
      //     ...(barcode ? { barCode: barcode } : {}),
      //   },
      // },
    },
    include:{
      Books:{}
    }
  });

  return result;
}
async function add(input: BookCategoryArray) {
  const [...rest] = input;
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
    data: [...input],
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
  const booksByBookCategoryId = await prisma.books.findMany({
    where:{
      bookCategoryId: bookCategoryId,
    }
  });
  const bookIdsArray = booksByBookCategoryId.map((b)=> b.id);
  const issued = await prisma.books.findMany({
    where:{
      bookCategoryId: bookCategoryId,
      OrderDetail:{
        some:{
          bookId: {in : bookIdsArray},
          returnDate: null,
          isCheck: true
        }
      }
    }
  });
  const issuedIds = issued.map((i)=> i.id);
  const free = await prisma.books.findMany({
    where:{
      bookCategoryId: bookCategoryId,
      id: {
        not:{
          in: issuedIds
        }
      }
    }
  })
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
