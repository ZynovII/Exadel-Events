import { Model } from 'mongoose';

import { EventCategoryModel } from './event-category.model';
import { NotFoundError } from '../error-handler/NotFoundError';
import { CreateEventCategoryDto } from '../../../common types/dto/event-category/create-event-category.dto';
import { EventCategory } from '../../../common types/dto/event-category/event-category.type';

export class EventCategoryService {
  constructor(private readonly _model: Model<EventCategory>) {}

  async createEventCategory(data: CreateEventCategoryDto): Promise<EventCategory> {
    const newEventCategory = new this._model(data);
    return newEventCategory.save();
  }

  async getAllEventCategories(): Promise<EventCategory[]> {
    return this._model.find();
  }

  async getEventCategoryByName(name: string): Promise<EventCategory> {
    const result = await this._model.findOne({ name });
    if (result) {
      return result;
    } else {
      throw new NotFoundError('Event category');
    }
  }

  async deleteEventCategory(name: string): Promise<string> {
    return await this._model.remove(await this.getEventCategoryByName(name));
  }
}

export default new EventCategoryService(EventCategoryModel);
