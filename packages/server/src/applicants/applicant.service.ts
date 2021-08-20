import { Model } from 'mongoose';
import { Applicant } from '../../../common types/dto/applicant/applicant.type';
import { CustomError } from '../error-handler/CustomError';
import { NotFoundError } from '../error-handler/NotFoundError';
import { log } from '../logger/logger';
import { DELETED } from '../utils/constants';
import { CreateApplicantDto } from '../../../common types/dto/applicant/create-applicant.dto';

export class ApplicantService {
  constructor(private readonly _model: Model<Applicant>) {}

  async createApplicant(data: CreateApplicantDto): Promise<Applicant> {
    const newApplicant = new this._model(data);
    return newApplicant.save();
  }

  async getAllApplicants(): Promise<Applicant[]> {
    return this._model.find();
  }

  async getApplicantById(id: string): Promise<Applicant> {
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

  async updateApplicant(id: string, payload: CreateApplicantDto): Promise<Applicant> {
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
