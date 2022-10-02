import { Project } from "../../../../../infra/db/entities/Project";
import { CreateProjectDTO } from "../../../dtos/CreateProjectDTO";

export interface ICreateProjectRepository {
  create: (project: CreateProjectDTO) => Promise<Project>;
}