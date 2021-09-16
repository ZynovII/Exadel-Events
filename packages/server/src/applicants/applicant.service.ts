import { Model } from 'mongoose';
import { Applicant } from '../../../common types/dto/applicant/applicant.type';
import { NotFoundError } from '../error-handler/NotFoundError';
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
    const result = await this._model.findOne({ id });
    if (result === null) {
      throw new NotFoundError('Applicant');
    }
    return result;
  }

  async deleteApplicant(id: string): Promise<string> {
    await this._model.remove(await this.getApplicantById(id));
    return DELETED;
  }

  async updateApplicant(id: string, payload: CreateApplicantDto): Promise<Applicant> {
    const result = await this._model.findByIdAndUpdate(id, payload);
    if (result === null) {
      throw new NotFoundError('Applicant');
    }
    return result;
  }
}
