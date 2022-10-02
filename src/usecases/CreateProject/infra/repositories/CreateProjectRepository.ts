import { Repository } from "typeorm";
import { AppDataSource } from "../../../../infra/db";
import { Project } from "../../../../infra/db/entities/Project";
import { CreateProjectDTO } from "../../dtos/CreateProjectDTO";
import { ICreateProjectRepository } from "./interfaces/ICreateProjectRepository";

export class CreateProjectRepository implements ICreateProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }
  async create(projectData: CreateProjectDTO): Promise<Project> {
    const newProject = this.repository.create({ ...projectData });

    await this.repository.save(newProject);

    return newProject;
  }
}