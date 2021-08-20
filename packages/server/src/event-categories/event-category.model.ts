import { model, Schema } from 'mongoose';
import { EventCategory } from '../../../common types/dto/event-category/event-category.type';

const schemaEventCategory = new Schema({
  name: { type: String, required: true },
});
export const EventCategoryModel = model<EventCategory>('Event-Category', schemaEventCategory);
