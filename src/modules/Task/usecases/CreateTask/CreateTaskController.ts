import { Request, Response } from 'express';
import { container } from "tsyringe";
import { CreateTaskService } from "./CreateTaskService";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { description, projectId } = request.body;

    const createTaskService = container.resolve(CreateTaskService);

    const result = await createTaskService.execute({ 
      project: { id: projectId }, 
      description 
    });

    return response.status(201).json(result);
  }
}