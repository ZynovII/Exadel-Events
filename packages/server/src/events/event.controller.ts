import { Request, Response } from 'express';
import { EventService } from './event.service';
export class EventController {
  constructor(private readonly _service: EventService) {}

  createEvent = async (req: Request, res: Response): Promise<Response> => {
    const body = req.body;
    const event = await this._service.createEvent(body);
    return res.send(event);
  };

  getEvents = async (req: Request, res: Response): Promise<Response> => {
    const events = await this._service.getAllEvents();
    return res.send(events);
  };

  deleteEvent = async (req: Request, res: Response): Promise<Response> => {
    const events = await this._service.deleteEvent(req.params.id);
    return res.send(events);
  };

  updateEvent = async (req: Request, res: Response): Promise<Response> => {
    const events = await this._service.updateEvent(req.params.id, req.body);
    return res.send(events);
  };
}
