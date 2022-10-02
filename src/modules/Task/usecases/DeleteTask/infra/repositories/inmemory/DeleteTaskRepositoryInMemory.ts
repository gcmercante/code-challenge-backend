import { Task } from "../../../../../../../infra/db/entities/Task";
import { IDeleteTaskRepository } from "../interfaces/IDeleteTaskRepository";

export class DeleteTaskRepositoryInMemory implements IDeleteTaskRepository {
  tasks: Task[] = [];

  async delete(taskId: string): Promise<number> {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    const deleted = this.tasks.splice(index, 1);

    return deleted.length;
  }
}