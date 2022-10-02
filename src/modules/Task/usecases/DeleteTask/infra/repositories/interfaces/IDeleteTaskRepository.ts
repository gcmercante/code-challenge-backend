export interface IDeleteTaskRepository {
  delete: (taskId: string) => Promise<number>;
}