import { PrismaClient } from "@prisma/client";
import buildTree from '../../../utils/buildTree';
import { RootLocation } from "./LocationsTypes";

const prisma = new PrismaClient();

async function getAllSingleTree(locationId: string){
    const data: Array<any> = await prisma.$queryRaw`WITH allLocations AS (
        SELECT *
        FROM Locations
        WHERE id = ${locationId} 
        UNION ALL
        SELECT c.*
        FROM Locations c
        INNER JOIN allLocations a ON c.parentId = a.id
    )
    SELECT * FROM allLocations`;
    const tree = buildTree.arrayToTree(data);
    return tree;
}
async function createRootLocation(input: RootLocation){
    const {...rest} = input;
    const result = await prisma.locations.create({
        data:{
            ...rest
        }
    });
    return result;
}
export default {getAllSingleTree, createRootLocation}