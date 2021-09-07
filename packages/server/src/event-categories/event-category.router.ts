import { Router } from 'express';
import eventCategoryController from './event-category.controller';

export const eventCategoryRouter = Router();

eventCategoryRouter.get('/event-type', eventCategoryController.getAllEventCategories);

eventCategoryRouter.get('/event-type/:name', eventCategoryController.getEventCategoryByName);

eventCategoryRouter.post('event-type', eventCategoryController.createEventCategory);

eventCategoryRouter.delete('event-type', eventCategoryController.deleteEventCategory);
