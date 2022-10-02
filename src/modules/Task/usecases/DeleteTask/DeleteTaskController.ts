import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteTaskService } from './DeleteTaskService';

export class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTaskService = container.resolve(DeleteTaskService);

    const result = await deleteTaskService.execute(id);

    return response.json({ affected: result });
  }
}