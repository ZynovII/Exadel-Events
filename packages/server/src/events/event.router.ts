import express from 'express';
import { EventController } from './event.controller';
import { EventModel } from './event.model';
import { EventService } from './event.service';

export const eventRouters = express.Router();

const eventController = new EventController(new EventService(EventModel));

eventRouters.get('/events/:eventId', eventController.getEvents);

eventRouters.post('/events', eventController.createEvent);

eventRouters.delete('/events/:eventId', eventController.deleteEvent);

eventRouters.put('/events/:eventId', eventController.updateEvent);
