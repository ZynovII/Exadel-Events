import { Model } from 'mongoose';
import { CreateEventCategoryDto } from './event-category.dto';

export class EventCategoryService {
  constructor(private readonly _model: Model<CreateEventCategoryDto>) {}

  async createEventCategory(data: CreateEventCategoryDto): Promise<CreateEventCategoryDto> {
    const newEventCategory = new this._model(data);
    return newEventCategory.save();
  }

  async getAllEventCategories(): Promise<CreateEventCategoryDto[]> {
    return this._model.find();
  }

  async getEventCategoryByName(name: string): Promise<CreateEventCategoryDto> {
    return this._model.findOne({ name });
  }

  async deleteEventCategory(name: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ name }, (err) => {
      response = err.message;
    });
    return response;
  }
}
