import { Project } from "../../../../../infra/db/entities/Project";
import { IGetProjectsRepository } from "../interfaces/IGetProjectsRepository";

export class GetProjectsRepositoryInMemory implements IGetProjectsRepository {
  projects: Project[] = [];

  async findByUserId(userId: string): Promise<Project[]> {
    return this.projects.filter((project) => project.user.id === userId);
  }
}