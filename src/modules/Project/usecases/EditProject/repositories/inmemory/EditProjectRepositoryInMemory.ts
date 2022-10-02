import { Project } from "../../../../../../infra/db/entities/Project";
import { IEditProjectRepository } from "../interfaces/IEditProjectRepository";

export class EditProjectRepositoryInMemory implements IEditProjectRepository {
  projects: Project[] = [];

  async update(projectId: string, title: string): Promise<Project> {
    this.projects.forEach((project) => {
      if(project.id === projectId) {
        project.title = title;
      }
    });

    return this.projects.find((project) => project.id === projectId);
  }
}