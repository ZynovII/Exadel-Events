import { Model } from 'mongoose';
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
    return this._model.findOne({ id });
  }

  async deleteApplicant(id: string): Promise<string> {
    let response = 'Success';
    await this._model.remove({ id }, (err) => {
      response = err.message;
    });
    return response;
  }

  async updateApplicant(id: string, payload: CreateApplicantDto): Promise<CreateApplicantDto> {
    return this._model.findByIdAndUpdate(id, payload);
  }
}
