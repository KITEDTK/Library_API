import { PrismaClient } from "@prisma/client";
import { seachBookCategory, searchQuery } from "./BookCategoriesTypes";
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
        some:{
            ...(locationId !== null ? {locationId: locationId.id} : {}),
            ...(barcode ? {barCode: barcode} : {})
        },
      }
    },
  });

  return result;
}
export default { getAllBookCategories, getBooksByBookCategories, search };
