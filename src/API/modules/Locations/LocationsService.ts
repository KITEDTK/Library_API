import { PrismaClient } from "@prisma/client";
import buildTree from "../../../utils/buildTree";
import { Location, LocationUpdateInfo } from "./LocationsTypes";

const prisma = new PrismaClient();

async function getAllSingleTree(locationId: string) {
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
async function createRootLocation(input: Location) {
  const { ...rest } = input;
  const result = await prisma.locations.create({
    data: {
      ...rest,
    },
  });
  return result;
}
async function createChildLocation(input: Location, locationId: string) {
  const { ...rest } = input;
  const result = await prisma.locations.create({
    data: {
      parentId: locationId,
      ...rest,
    },
  });
  return result;
}
async function updateLocation(locationId: string, input: LocationUpdateInfo) {
  const { ...rest } = input;
  const result = await prisma.locations.update({
    where: {
      id: locationId,
    },
    data: {
      ...rest,
    },
  });
  return result;
}
async function deleteLocation(locationId: string) {
  const checkExistBookInLocation = await prisma.books.findFirst({
    where: {
      locationId: locationId,
    },
  });
  if (checkExistBookInLocation) {
    throw "error location has book";
  }
  const checkExistChildLocation = await prisma.locations.findFirst({
    where: {
      parentId: locationId,
    },
  });
  if (checkExistChildLocation) {
    throw "error locaiton has a child ";
  }
  const result = await prisma.locations.delete({
    where: {
      id: locationId,
    },
  });
  return result;
}
export default {
  getAllSingleTree,
  createRootLocation,
  createChildLocation,
  updateLocation,
  deleteLocation,
};
