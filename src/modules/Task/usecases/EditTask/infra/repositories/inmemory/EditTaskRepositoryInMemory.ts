import { Task } from "../../../../../../../infra/db/entities/Task";
import { IEditTaskRepository } from "../interface/IEditTaskRepository";

export class EditTaskRepositoryInMemory implements IEditTaskRepository {
  tasks: Task[] = [];

  async update(taskId: string, done: boolean): Promise<Task> {
    this.tasks.forEach((task) => {
      if(task.id === taskId) {
        task.done = done;
      }
    });

    return this.tasks.find((task) => task.id === taskId);
  }
}