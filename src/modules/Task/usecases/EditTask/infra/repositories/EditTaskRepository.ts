import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../infra/db";
import { Task } from "../../../../../../infra/db/entities/Task";
import { IEditTaskRepository } from "./interface/IEditTaskRepository";

export class EditTaskRepository implements IEditTaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }
  
  async update(taskId: string, done: boolean): Promise<Task> {
    const result = await this.repository.save({ 
      id: taskId,
      done,
      finished_at: new Date()
    });

    return result;
  }
}