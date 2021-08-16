import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
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
    try {
      const result = await this._model.findOne({ name });
      if (result) {
        return result;
      } else {
        throw new NotFoundError('Event category');
      }
    } catch (err) {
      throw new CustomError();
    }
  }

  async deleteEventCategory(name: string): Promise<string> {
    try {
      return await this._model.remove(await this.getEventCategoryByName(name));
    } catch (err) {
      throw new CustomError();
    }
  }
}
