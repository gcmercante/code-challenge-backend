import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditProjectService } from './EditProjectService';

export class EditProjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title } = request.body;

    const editProjectService = container.resolve(EditProjectService);

    const result = await editProjectService.execute(id, title);

    return response.json(result);
  }
}