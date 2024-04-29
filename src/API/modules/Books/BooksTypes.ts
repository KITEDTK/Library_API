export enum WarehouseType {
    KHO = 'KHO',
    PHONG_DOC = 'PHONG_DOC'
}
export interface Books {
    bookCategoryId? : string;
    status?: boolean;
    barCode?: string;
    locationId?: string;
    eId?: string;
    warehouseType?: WarehouseType,
    orgId?: string;
    orderNumber?: number;
}

export interface BooksArray extends Array<Books>{};