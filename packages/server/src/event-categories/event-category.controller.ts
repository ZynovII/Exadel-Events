import { Request, Response, NextFunction } from 'express';
import eventCategoryService, { EventCategoryService } from './event-category.service';
import { log } from '../logger/logger';

export class EventCategoryController {
  constructor(private readonly _service: EventCategoryService) {}

  createEventCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createEventCategory(data);
      return res.send(data);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getAllEventCategories = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllEventCategories();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getEventCategoryByName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getEventCategoryByName(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteEventCategory = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteEventCategory(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new EventCategoryController(eventCategoryService);
