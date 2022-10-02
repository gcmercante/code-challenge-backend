import { Project } from "../../../../../infra/db/entities/Project";
import { CreateProjectDTO } from "../../../dtos/CreateProjectDTO";
import { ICreateProjectRepository } from "../interfaces/ICreateProjectRepository";

export class CreateProjectRepositoryInMemory implements ICreateProjectRepository {
  private projects: Project[] = [];

  async create(projectData: CreateProjectDTO): Promise<Project> {
    const newProject = new Project();

    Object.assign(newProject, { ...projectData });

    this.projects.push(newProject);

    return newProject;
  }

}