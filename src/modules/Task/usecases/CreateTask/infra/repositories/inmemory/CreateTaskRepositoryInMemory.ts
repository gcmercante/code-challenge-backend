import { Task } from "../../../../../../../infra/db/entities/Task";
import { CreateTaskDTO } from "../../../dtos/CreateTaskDTO";
import { ICreateTaskRepository } from "../interfaces/ICreateTaskRepository";

export class CreateTaskRepositoryInMemory implements ICreateTaskRepository {
  tasks: Task[] = [];
  async create(task: CreateTaskDTO): Promise<Task> {
    const newTask = new Task();
    
    Object.assign(newTask, { ...task });

    return newTask;
  }
}