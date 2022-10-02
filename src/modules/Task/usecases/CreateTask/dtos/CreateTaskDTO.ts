export interface CreateTaskDTO {
  description: string;
  project: {
    id: string;
  }
}