import express from 'express';
import passport from 'passport';

import eventController from './event.controller';

export const eventRouters = express.Router();

eventRouters.get('/events', eventController.getEvents);

eventRouters.get('/events/:eventId', eventController.getEventById);

eventRouters.post(
  '/events',
  passport.authenticate('jwt', { session: false }),
  eventController.createEvent,
);

eventRouters.delete(
  '/events/:eventId',
  passport.authenticate('jwt', { session: false }),
  eventController.deleteEvent,
);

eventRouters.put(
  '/events/:eventId',
  passport.authenticate('jwt', { session: false }),
  eventController.updateEvent,
);
