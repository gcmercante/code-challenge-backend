import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { EditTaskService } from './EditTaskService';

export class EditTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { done } = request.body;

    const editTaskService = container.resolve(EditTaskService);

    const result = await editTaskService.execute(id, done);

    return response.json(result);
  }
}