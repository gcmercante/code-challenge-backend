import { inject, injectable } from "tsyringe";
import { CreateProjectDTO } from "./dtos/CreateProjectDTO";

import { ICreateProjectRepository } from "./infra/repositories/interfaces/ICreateProjectRepository";

@injectable()
export class CreateProjectService {
  constructor(
    @inject('CreateProjectRepository')
    private readonly createProjectRepository: ICreateProjectRepository
  ) {}

  async execute(projectData: CreateProjectDTO) {
    const result = await this.createProjectRepository.create(projectData);

    return result;
  }
}