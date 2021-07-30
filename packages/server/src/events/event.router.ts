import express from 'express';
import { createEventHandler, deleteEventHandler, getEventsHandler } from './event.controller';

export const eventRouters = express.Router();

eventRouters.get('/events', getEventsHandler);
eventRouters.post('/events', createEventHandler);
eventRouters.delete('/events', deleteEventHandler);
