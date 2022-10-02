import { Repository } from "typeorm";
import { AppDataSource } from "../../../../infra/db";
import { Project } from "../../../../infra/db/entities/Project";
import { IGetProjectsRepository } from "./interfaces/IGetProjectsRepository";

export class GetProjectsRepository implements IGetProjectsRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }

  async findByUserId(userId: string): Promise<Project[]> {
    const userProjects = await this.repository.find({
      relations: {
        tasks: true,
      },
      where: {
        user: {
          id: userId,
        }
      }
    });

    return userProjects;
  }
}