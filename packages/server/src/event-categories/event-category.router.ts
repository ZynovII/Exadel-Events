import { Router } from 'express';
import { EventCategoryController } from './event-category.controller';
import { EventCategoryModel } from './event-category.model';
import { EventCategoryService } from './event-category.service';

export const eventCategoryRouter = Router();

const eventCategoryController = new EventCategoryController(
  new EventCategoryService(EventCategoryModel),
);

eventCategoryRouter.get('/event-type', eventCategoryController.getAllEventCategories);

eventCategoryRouter.get('/event-type/:name', eventCategoryController.getEventCategoryByName);

eventCategoryRouter.post('event-type', eventCategoryController.createEventCategory);

eventCategoryRouter.delete('event-type', eventCategoryController.deleteEventCategory);
