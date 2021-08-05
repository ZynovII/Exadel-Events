import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private readonly _service: UserService) {}

  async createUser(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    await this._service.createUser(data);
    return res.send(data);
  }

  async getAllUsers(req: Request, res: Response): Promise<Response> {
    const result = this._service.getAllUsers();
    return res.send(result);
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    const result = this._service.getUserById(req.params.id);
    return res.send(result);
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const result = this._service.deleteUser(req.params.id);
    return res.send(result);
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const result = this._service.updateUser(req.params.id, req.body.User);
    return res.send(result);
  }
}
