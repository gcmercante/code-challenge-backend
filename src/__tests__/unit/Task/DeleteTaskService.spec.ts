import { v4 as uuidV4 } from 'uuid';

import { DeleteTaskService } from "../../../modules/Task/usecases/DeleteTask/DeleteTaskService";
import { DeleteTaskRepositoryInMemory } from "../../../modules/Task/usecases/DeleteTask/infra/repositories/inmemory/DeleteTaskRepositoryInMemory";

let deleteTaskRepository: DeleteTaskRepositoryInMemory;
let deleteTaskService: DeleteTaskService;

describe('-- DeleteTaskService --', () => {
  beforeEach(() => {
    deleteTaskRepository = new DeleteTaskRepositoryInMemory();
    deleteTaskService = new DeleteTaskService(deleteTaskRepository);
  });

  test('should delete task by id', async () => {
    const taskId = uuidV4();

    deleteTaskRepository.tasks.push(
      {
        id: taskId,
        description: 'Test Task',
        done: false,
        project: {
          id: uuidV4(),
          tasks: [],
          title: 'Test Project',
          user: {
            id: uuidV4(),
            name: 'Test',
            email: 'test@example.com',
            password: 'test',
          },
        },
      },
      {
        id: uuidV4(),
        description: 'Test Task',
        done: false,
        project: {
          id: uuidV4(),
          tasks: [],
          title: 'Test Project',
          user: {
            id: uuidV4(),
            name: 'Test',
            email: 'test@example.com',
            password: 'test',
          },
        }
      }
    );

    const result = await deleteTaskService.execute(taskId);

    expect(result).toBe(1);
  })
})