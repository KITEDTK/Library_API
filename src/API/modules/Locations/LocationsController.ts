import { Request, Response } from "express";

import LocationsService from "./LocationsService";

async function getAll(req: Request, res: Response) {
  try {
    const { locationId } = req.params;
    const result = await LocationsService.getAllSingleTree(locationId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function createRootlocation(req: Request, res: Response) {
  try {
    const result = await LocationsService.createRootLocation(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function createChildLocation(req: Request, res: Response) {
  try {
    const { locationId } = req.params;
    const result = await LocationsService.createChildLocation(
      req.body,
      locationId
    );
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function updateLocation(req: Request, res: Response) {
  try {
    const { locationId } = req.params;
    const result = await LocationsService.updateLocation(locationId, req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function deleteLocation(req: Request, res: Response) {
    try {
        const { locationId } = req.params;
        const result = await LocationsService.deleteLocation(locationId);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
}
export default {
  getAll,
  createRootlocation,
  createChildLocation,
  updateLocation,
  deleteLocation
};
