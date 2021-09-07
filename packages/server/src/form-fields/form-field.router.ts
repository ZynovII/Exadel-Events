import { Router } from 'express';
import formFieldController from './form-field.controller';

export const formFieldRouter = Router();

formFieldRouter.get('/formField', formFieldController.getAllFormFields);
formFieldRouter.get('/formField/:id', formFieldController.getFormFieldById);
formFieldRouter.post('/formField', formFieldController.createFormField);
formFieldRouter.delete('/formField/:id', formFieldController.deleteFormField);
formFieldRouter.put('/formField', formFieldController.updateFormField);
