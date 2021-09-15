import { NextFunction, Request, Response } from 'express';
import eventService, { EventService } from './event.service';

export class EventController {
  constructor(private readonly _service: EventService) {}

  createEvent = async (req: Request, res: Response): Promise<Response> => {
    const body = req.body;
    const event = await this._service.createEvent(body);
    return res.send(event);
  };

  getEventById = async (req: Request, res: Response, next: NextFunction) => {
    const result = await this._service.getEventById(req.params.eventId);
    return res.send(result);
  };

  getEvents = async (req: Request, res: Response): Promise<Response> => {
    const params = req.query;
    const events = await this._service.getAllEvents(params);
    return res.send(events);
  };

  deleteEvent = async (req: Request, res: Response): Promise<Response> => {
    const events = await this._service.deleteEvent(req.params.eventId);
    return res.send(events);
  };

  updateEvent = async (req: Request, res: Response): Promise<Response> => {
    const events = await this._service.updateEvent(req.params.eventId, req.body);
    return res.send(events);
  };
}

export default new EventController(eventService);
