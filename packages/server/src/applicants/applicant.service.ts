import { Model } from 'mongoose';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
import { DELETED } from '../utils/constants';
import { CreateApplicantDto } from './dto/create-applicant.dto';

export class ApplicantService {
  constructor(private readonly _model: Model<CreateApplicantDto>) {}

  async createApplicant(data: CreateApplicantDto): Promise<CreateApplicantDto> {
    const newApplicant = new this._model(data);
    return newApplicant.save();
  }

  async getAllApplicants(): Promise<CreateApplicantDto[]> {
    return this._model.find();
  }

  async getApplicantById(id: string): Promise<CreateApplicantDto> {
    try {
      const result = await this._model.findOne({ id });
      if (result === null) {
        throw new NotFoundError('Applicant');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async deleteApplicant(id: string): Promise<string> {
    try {
      await this._model.remove(await this.getApplicantById(id));
      return DELETED;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }

  async updateApplicant(id: string, payload: CreateApplicantDto): Promise<CreateApplicantDto> {
    try {
      const result = await this._model.findByIdAndUpdate(id, payload);
      if (result === null) {
        throw new NotFoundError('Applicant');
      }
      return result;
    } catch (err) {
      log.info(err);
      throw new CustomError();
    }
  }
}
