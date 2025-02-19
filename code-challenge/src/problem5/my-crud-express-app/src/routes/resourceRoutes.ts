import { Router } from 'express';
import ResourceController from '../controllers/resourceController';

const router = Router();
const resourceController = new ResourceController();

export function setResourceRoutes(app: Router) {
  app.post('/api/v1/resources', resourceController.createResource.bind(resourceController));
  app.get('/api/v1/resources', resourceController.listResources.bind(resourceController));
  app.get('/api/v1/resources/:id', resourceController.getResource.bind(resourceController));
  app.put('/api/v1/resources/:id', resourceController.updateResource.bind(resourceController));
  app.delete('/api/v1/resources/:id', resourceController.deleteResource.bind(resourceController));
}