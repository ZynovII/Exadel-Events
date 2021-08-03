import { model, Schema } from 'mongoose';
import { CreateEventCategoryDto } from './event-category.dto';

const schemaEventCategory = new Schema({
  name: { type: String, required: true },
});
export const EventCategoryModel = model<CreateEventCategoryDto>('Event-Type', schemaEventCategory);
