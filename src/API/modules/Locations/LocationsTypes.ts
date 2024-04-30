export interface Location{
    name?: string;
    fullName?: string;
    order?: number;
}
export interface LocationUpdateInfo{
    name?: string;
    fullName?: string;
    order?: number;
    parentId?: string;
}