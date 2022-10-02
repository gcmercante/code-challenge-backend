import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProjectService } from './CreateProjectService';

export class CreateProjectController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;
    const { user } = request;

    const createProjectService = container.resolve(CreateProjectService);

    const result = await createProjectService.execute({ user, title })

    return response.status(201).json(result);
  }
}