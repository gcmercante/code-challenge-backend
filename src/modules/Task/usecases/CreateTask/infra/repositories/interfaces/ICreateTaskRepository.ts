import { Task } from "../../../../../../../infra/db/entities/Task";
import { CreateTaskDTO } from "../../../dtos/CreateTaskDTO";

export interface ICreateTaskRepository {
  create: (task: CreateTaskDTO) => Promise<Task>;
}