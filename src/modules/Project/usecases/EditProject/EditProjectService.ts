import { inject, injectable } from "tsyringe";
import { IEditProjectRepository } from "./repositories/interfaces/IEditProjectRepository";

@injectable()
export class EditProjectService {
  constructor(
    @inject('EditProjectRepository')
    private readonly editProjectRepository: IEditProjectRepository
  ) { }
  async execute(projectId: string, title: string) {
    const result = await this.editProjectRepository.update(projectId, title);

    return result;
  }
}