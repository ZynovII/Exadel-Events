import express from 'express';
import eventController from './event.controller';

export const eventRouters = express.Router();

eventRouters.get('/events', eventController.getEvents);

eventRouters.get('/events/:eventId', eventController.getEventById);

eventRouters.post('/events', eventController.createEvent);

eventRouters.delete('/events/:eventId', eventController.deleteEvent);

eventRouters.put('/events/:eventId', eventController.updateEvent);
