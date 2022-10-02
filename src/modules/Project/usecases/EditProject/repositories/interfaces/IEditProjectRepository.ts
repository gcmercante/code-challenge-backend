import { Project } from "../../../../../../infra/db/entities/Project";

export interface IEditProjectRepository {
  update: (projectId: string, title: string) => Promise<Project>;
}