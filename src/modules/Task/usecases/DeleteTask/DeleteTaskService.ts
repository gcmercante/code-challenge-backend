import { injectable, inject } from "tsyringe";
import { IDeleteTaskRepository } from "./infra/repositories/interfaces/IDeleteTaskRepository";

@injectable()
export class DeleteTaskService {
  constructor(
    @inject('DeleteTaskRepository')
    private readonly deleteTaskRepository: IDeleteTaskRepository
  ) { }

  async execute(taskId: string) {
    const result = await this.deleteTaskRepository.delete(taskId);

    return result;
  }
}