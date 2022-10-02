import { Project } from "../../../../../infra/db/entities/Project";

export interface IGetProjectsRepository {
  findByUserId: (userId: string) => Promise<Project[]>;
}