import { Request, Response } from 'express';
import { EventCategoryService } from './event-category.service';

export class EventCategoryController {
  constructor(private readonly _service: EventCategoryService) {}

  async createEventCategory(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createEventCategory(data);
    return res.send(data);
  }

  async getAllEventCategories(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllEventCategories();
    return res.send(result);
  }

  async getEventCategoryByName(req: Request, res: Response): Promise<Response> {
    const result = this._service.getEventCategoryByName(req.params.name);
    return res.send(result);
  }

  async deleteEventCategory(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteEventCategory(req.params.name);
    return res.send(result);
  }
}
