import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../infra/db";
import { Project } from "../../../../../infra/db/entities/Project";
import { IEditProjectRepository } from "./interfaces/IEditProjectRepository";

export class EditProjectRepository implements IEditProjectRepository{
  private repository: Repository<Project>;

  constructor() {
    this.repository = AppDataSource.getRepository(Project);
  }
  
  async update(id: string, title: string): Promise<Project> {
    await this.repository.save({ id, title });

    const [result] = await this.repository.find({
      relations: {
        tasks: true,
      },
      where: { id }
    });

    return result;
  }
}