import { Router } from 'express';
import { EventTypeController } from './event-type.controller';
import { EventTypeModel } from './event-type.model';
import { EventTypeService } from './event-type.service';

export const eventTypeRouter = Router();

const eventTypeController = new EventTypeController(new EventTypeService(EventTypeModel));

eventTypeRouter.get('/event-type', eventTypeController.getAllEventTypes);

eventTypeRouter.get('/event-type/:name', eventTypeController.getEventTypeByName);

eventTypeRouter.post('event-type', eventTypeController.createEventType);

eventTypeRouter.delete('event-type', eventTypeController.deleteEventType);
