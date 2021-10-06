import { Router } from 'express';

import { eventRouters } from './events/event.router';
import { eventTypeRouter } from './event-types/event-type.router';
import { eventCategoryRouter } from './event-categories/event-category.router';
import { languageRouter } from './languages/language.router';
import { applicantRouter } from './applicants/applicant.router';
import { userRouter } from './users/user.router';
import { formFieldRouter } from './form-fields/form-field.router';
import { countryRouter } from './country/country.router';
import { formOptionsRouter } from './form-options/form-options.router';
import { uploadFilesRouters } from './upload-files/upload-files.router';
import { authRouter } from './auth/auth.router';

export const baseRouter = Router();

baseRouter.use(authRouter);
baseRouter.use(eventRouters);
baseRouter.use(eventTypeRouter);
baseRouter.use(eventCategoryRouter);
baseRouter.use(languageRouter);
baseRouter.use(applicantRouter);
baseRouter.use(userRouter);
baseRouter.use(formFieldRouter);
baseRouter.use(countryRouter);
baseRouter.use(formOptionsRouter);
baseRouter.use(uploadFilesRouters);
