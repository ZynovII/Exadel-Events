import { Request, Response } from 'express';
import { EventService } from './event.service';

const eventServiceInstance = new EventService();

export const createEventHandler = async (req: Request, res: Response): Promise<Response> => {
  const body = req.body;
  const event = await eventServiceInstance.createEvent(body);
  return res.send(event);
};

export const getEventsHandler = async (req: Request, res: Response): Promise<Response> => {
  const events = await eventServiceInstance.getAllEvents();
  return res.send(events);
};

export const deleteEventHandler = async (req: Request, res: Response): Promise<Response> => {
  const events = await eventServiceInstance.deleteEvent(req.query.id);
  return res.send(events);
};
