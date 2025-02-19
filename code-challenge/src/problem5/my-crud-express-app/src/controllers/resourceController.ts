import { Request, Response } from "express";
import { ResourceService } from "../services/resourceService";
import { ResourceInput } from "../types";
import Joi from "joi";
import { isValidObjectId } from "mongoose";

const createResourceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

const updateResourceSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
}).or('name', 'description');

export default class ResourceController {
  private resourceService: ResourceService;

  constructor() {
    this.resourceService = new ResourceService();
  }

  public createResource = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { error } = createResourceSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const { name, description }: ResourceInput = req.body;
    const newResource = await this.resourceService.createResource({
      name,
      description,
    });
    res.status(201).json(newResource);
  };

  public listResources = async (req: Request, res: Response): Promise<void> => {
    const resources = await this.resourceService.getAllResources();
    res.status(200).json(resources);
  };

  public getResource = async (req: Request, res: Response): Promise<void> => {
    const resourceId = req.params.id;
    if (!isValidObjectId(resourceId)) {
      res.status(400).json({ message: "Invalid resource ID" });
      return;
    }

    const resource = await this.resourceService.getResourceById(resourceId);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  };

  public updateResource = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { error } = updateResourceSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const resourceId = req.params.id;
    if (!isValidObjectId(resourceId)) {
      res.status(400).json({ message: "Invalid resource ID" });
      return;
    }

    const { description, name }: ResourceInput = req.body;
    const updatedResource = await this.resourceService.updateResource(
      resourceId,
      { description, name }
    );
    if (updatedResource) {
      res.status(200).json(updatedResource);
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  };

  public deleteResource = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const resourceId = req.params.id;
    if (!isValidObjectId(resourceId)) {
      res.status(400).json({ message: "Invalid resource ID" });
      return;
    }

    const deleted = await this.resourceService.deleteResource(resourceId);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Resource not found" });
    }
  };
}
