import { Router } from 'express';
import { FormFieldController } from './form-field.controller';
import { FormFieldService } from './form-field.service';
import { FormFieldModel } from './form-field.model';

export const formFieldRouter = Router();

const formFieldController = new FormFieldController(new FormFieldService(FormFieldModel));

formFieldRouter.get('/formField', formFieldController.getAllFormFields);
formFieldRouter.get('/formField/:id', formFieldController.getFormFieldById);
formFieldRouter.post('/formField', formFieldController.createFormField);
formFieldRouter.delete('/formField/:id', formFieldController.deleteFormField);
formFieldRouter.put('/formField', formFieldController.updateFormField);
