export interface IDeleteProjectRepository {
  delete: (projectId: string) => Promise<number>;
}