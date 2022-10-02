import { Task } from "../../../../../../../infra/db/entities/Task";

export interface IEditTaskRepository {
  update: (taskId: string, done: boolean) => Promise<Task>;
}