import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../infra/db";
import { Task } from "../../../../../../infra/db/entities/Task";
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";
import { ICreateTaskRepository } from "./interfaces/ICreateTaskRepository";

export class CreateTaskRepository implements ICreateTaskRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = AppDataSource.getRepository(Task);
  }
  async create(task: CreateTaskDTO): Promise<Task> {
    const newTask = this.repository.create({ ...task });

    const result = await this.repository.save(newTask);

    return result;
  }
}