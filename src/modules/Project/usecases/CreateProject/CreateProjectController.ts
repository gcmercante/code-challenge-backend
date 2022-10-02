import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProjectService } from './CreateProjectService';

export class CreateProjectController {
  async handle(request: Request, response: Response) {
    const { userId, title } = request.body;

    const createProjectService = container.resolve(CreateProjectService);

    const result = await createProjectService.execute({ user: { id: userId }, title })

    return response.status(201).json(result);
  }
}