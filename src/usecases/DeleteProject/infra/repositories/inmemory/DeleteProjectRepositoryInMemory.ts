import { Project } from "../../../../../infra/db/entities/Project";
import { IDeleteProjectRepository } from "../interfaces/IDeleteProjectRepository";

export class DeleteProjectRepositoryInMemory implements IDeleteProjectRepository {
  projects: Project[] = [];

  async delete(projectId: string): Promise<number> {
    const index = this.projects.findIndex((project) => project.id === projectId);
    const deleted = this.projects.splice(index, 1);

    return deleted.length;
  }
}