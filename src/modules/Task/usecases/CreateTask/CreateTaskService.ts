import { injectable, inject } from "tsyringe";
import { CreateTaskDTO } from "./dtos/CreateTaskDTO";
import { ICreateTaskRepository } from "./infra/repositories/interfaces/ICreateTaskRepository";

@injectable()
export class CreateTaskService {
  constructor(
    @inject('CreateTaskRepository')
    private readonly createTaskRepository: ICreateTaskRepository
  ) { }

  async execute(task: CreateTaskDTO) {
    const result = await this.createTaskRepository.create(task);

    return result;
  }
}