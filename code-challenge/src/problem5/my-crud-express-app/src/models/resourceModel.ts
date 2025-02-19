import { Schema, model, Document } from 'mongoose';

interface Resource extends Document {
  id: string;
  name: string;
  description: string;
}

const resourceSchema = new Schema<Resource>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const ResourceModel = model<Resource>('Resource', resourceSchema);

export default ResourceModel;