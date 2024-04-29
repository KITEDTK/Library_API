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
}
export interface searchQuery {
    where: ANDClause;
    include: {
        Books: {
            where: ANDClause;
        };
    };
}
export interface ANDClause {
    AND: Array<{ [key: string]: any }>;
}