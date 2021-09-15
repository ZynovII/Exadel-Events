import { Request, Response } from 'express';
import { BadRequestError } from '../error-handler/BadRequestError';

export class UploadFilesController {
  uploadImage(req: Request, res: Response): Response {
    const file = req.file;
    if (!file) {
      throw new BadRequestError('Please upload a file');
    }
    return res.send('/uploads/' + file?.filename);
  }

  uploadCV(req: Request, res: Response): Response {
    const file = req.file;
    if (!file) {
      throw new BadRequestError('Please upload a file');
    }
    return res.send('/uploads/' + file.filename);
  }
}

export default new UploadFilesController();
