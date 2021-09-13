import { Router } from 'express';
import eventTypeController from './event-type.controller';

export const eventTypeRouter = Router();

eventTypeRouter.get('/event-type', eventTypeController.getAllEventTypes);

eventTypeRouter.get('/event-type/:name', eventTypeController.getEventTypeByName);

eventTypeRouter.post('/event-type', eventTypeController.createEventType);

eventTypeRouter.delete('/event-type', eventTypeController.deleteEventType);
