import { v4 as uuidV4 } from 'uuid';

import { CreateTaskService } from "../../../modules/Task/usecases/CreateTask/CreateTaskService";
import { CreateTaskRepositoryInMemory } from '../../../modules/Task/usecases/CreateTask/infra/repositories/inmemory/CreateTaskRepositoryInMemory';

let createTaskRepository: CreateTaskRepositoryInMemory;
let createTaskService: CreateTaskService;

describe('-- CreateTaskService --', () => {
  beforeEach(() => {
    createTaskRepository = new CreateTaskRepositoryInMemory();
    createTaskService = new CreateTaskService(createTaskRepository);
  })

  test('should create a task', async() => {
    const task = {
      description: 'Test Task',
      project: { 
        id: uuidV4(),
      },
    }

    const result = await createTaskService.execute(task)

    expect(result.project.id).toBe(task.project.id);
    expect(result.description).toBe('Test Task');
    expect(result.created_at).toBeInstanceOf(Date);
  })
})