import { Repository } from "typeorm";
import { AppDataSource } from "../../../../infra/db";
import { Project } from "../../../../infra/db/entities/Project";
import { IDeleteProjectRepository } from "./interfaces/IDeleteProjectRepository";

export class DeleteProjectRepository implements IDeleteProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }

  async delete(projectId: string): Promise<number> {
    const result = await this.repository.delete({ id: projectId });

    return result.affected;
  }
}