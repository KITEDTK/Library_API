
export interface seachBookCategory{
    name? : string;
    fullText?: string;
    ISBN?: string;
    language?: string;
    UDC?: string;
    author?: string;
    title?: string;
    edition?: number;
    publishingPlace?: string;
    publisher?: string;
    pulishingYear?: number;
    numberPage?: number;
    size?: string;
    coAuthor?: string;
    barcode?: string;
    location?: string;
};
export interface BookCategory{
    name? : string;
    fullText?: string;
    ISBN?: string;
    language?: string;
    UDC?: string;
    author?: string;
    title?: string;
    edition?: number;
    publishingPlace?: string;
    publisher?: string;
    pulishingYear?: number;
    numberPage?: number;
    size?: string;
    coAuthor?: string;
    orderNumber?: number;
};
export interface BookCategoryArray extends Array<BookCategory>{};