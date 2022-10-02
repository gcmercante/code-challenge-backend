import { inject, injectable } from "tsyringe";
import { IDeleteProjectRepository } from "./repositories/interfaces/IDeleteProjectRepository";

@injectable()
export class DeleteProjectService {
  constructor(
    @inject('DeleteProjectRepository')
    private readonly deleteProjectRepository: IDeleteProjectRepository
  ) { }

  async execute(projectId: string) {
    const result = await this.deleteProjectRepository.delete(projectId);

    return result;
  } 
}