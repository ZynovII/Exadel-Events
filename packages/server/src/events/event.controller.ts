import { NextFunction, Request, Response } from 'express';
import eventService, { EventService } from './event.service';
import { log } from '../logger/logger';
import { ForbiddenError } from '../error-handler/ForbiddenError';

export class EventController {
  constructor(private readonly _service: EventService) {}

  createEvent = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      if (!req.user?.isAdmin) throw new ForbiddenError('Only admins can edit events');
      const body = req.body;
      const event = await this._service.createEvent(body);
      return res.status(201).send(event);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getEventById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const result = await this._service.getEventById(req.params.eventId);
      return res.status(200).send(result);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  getEvents = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const params = req.query;
      const events = await this._service.getAllEvents(params);
      return res.status(200).send(events);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  deleteEvent = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      if (!req.user?.isAdmin) throw new ForbiddenError('Only admins can edit events');
      const events = await this._service.deleteEvent(req.params.eventId);
      return res.status(200).send(events);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };

  updateEvent = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      if (!req.user?.isAdmin) throw new ForbiddenError('Only admins can edit events');
      const events = await this._service.updateEvent(req.params.eventId, req.body);
      return res.status(200).send(events);
    } catch (err) {
      log.error(err);
      next(err);
    }
  };
}

export default new EventController(eventService);
