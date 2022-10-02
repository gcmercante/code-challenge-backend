import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../infra/db";
import { Task } from "../../../../../../infra/db/entities/Task";
import { IDeleteTaskRepository } from "./interfaces/IDeleteTaskRepository";

export class DeleteTaskRepository implements IDeleteTaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }
  
  async delete(taskId: string): Promise<number> {
    const result = await this.repository.delete({ id: taskId });

    return result.affected;
  }
}