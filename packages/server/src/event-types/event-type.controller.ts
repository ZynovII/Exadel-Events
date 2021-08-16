import { Request, Response } from 'express';
import { EventTypeService } from './event-type.service';

export class EventTypeController {
  constructor(private readonly _service: EventTypeService) {}

  createEventType = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    await this._service.createEventType(data);
    return res.send(data);
  };

  getAllEventTypes = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getAllEventTypes();
    return res.send(result);
  };

  getEventTypeByName = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.getEventTypeByName(req.params.name);
    return res.send(result);
  };

  deleteEventType = async (req: Request, res: Response): Promise<Response> => {
    const result = this._service.deleteEventType(req.params.name);
    return res.send(result);
  };
}
