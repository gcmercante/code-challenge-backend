import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../infra/db";
import { Project } from "../../../../../infra/db/entities/Project";
import { IEditProjectRepository } from "./interfaces/IEditProjectRepository";

export class EditProjectRepository implements IEditProjectRepository{
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }
  
  async update(projectId: string, title: string): Promise<Project> {
    const result = await this.repository.save({ id: projectId, title: title });

    return result;
  }
}