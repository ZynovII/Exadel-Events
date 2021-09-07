import { Request, Response } from 'express';
import eventCategoryService, { EventCategoryService } from './event-category.service';

export class EventCategoryController {
  constructor(private readonly _service: EventCategoryService) {}

  createEventCategory = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createEventCategory(data);
    return res.send(data);
  };

  getAllEventCategories = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllEventCategories();
    return res.send(result);
  };

  getEventCategoryByName = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getEventCategoryByName(req.params.name);
    return res.send(result);
  };

  deleteEventCategory = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteEventCategory(req.params.name);
    return res.send(result);
  };
}

export default new EventCategoryController(eventCategoryService);
