import { inject, injectable } from "tsyringe";
import { IEditTaskRepository } from "./infra/repositories/interface/IEditTaskRepository";

@injectable()
export class EditTaskService {
  constructor(
    @inject('EditTaskRepository')
    private readonly editTaskRepository: IEditTaskRepository
  ) { }

  async execute(taskId: string, done: boolean) {
    const result = await this.editTaskRepository.update(taskId, done);

    return result;
  }
}