import { Request, Response, NextFunction } from 'express';
import eventTypeService, { EventTypeService } from './event-type.service';
import { log } from '../logger/logger';

export class EventTypeController {
  constructor(private readonly _service: EventTypeService) {}

  createEventType = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const data = req.body;
      await this._service.createEventType(data);
      return res.send(data);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getAllEventTypes = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getAllEventTypes();
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getEventTypeByName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.getEventTypeByName(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteEventType = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = this._service.deleteEventType(req.params.name);
      return res.send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new EventTypeController(eventTypeService);
