import { Resource } from '../types';
import ResourceModel from '../models/resourceModel';

export class ResourceService {
    async createResource(data: Resource): Promise<Resource> {
        const resource = new ResourceModel(data);
        return await resource.save();
    }

    async getAllResources(): Promise<Resource[]> {
        return await ResourceModel.find();
    }

    async getResourceById(id: string): Promise<Resource | null> {
        return await ResourceModel.findById(id);
    }

    async updateResource(id: string, data: Partial<Resource>): Promise<Resource | null> {
        return await ResourceModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteResource(id: string): Promise<Resource | null> {
        return await ResourceModel.findByIdAndDelete(id);
    }
}