import { Request, Response } from 'express';
import { EventTypeService } from './event-type.service';

export class EventTypeController {
  constructor(private readonly _service: EventTypeService) {}

  async createEventType(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createEventType(data);
    return res.send(data);
  }

  async getAllEventTypes(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllEventTypes();
    return res.send(result);
  }

  async getEventTypeByName(req: Request, res: Response): Promise<Response> {
    const result = this._service.getEventTypeByName(req.params.name);
    return res.send(result);
  }

  async deleteEventType(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteEventType(req.params.name);
    return res.send(result);
  }
}
