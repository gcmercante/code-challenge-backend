import { v4 as uuidV4 } from 'uuid';

import { EditTaskService } from "../../../modules/Task/usecases/EditTask/EditTaskService";
import { EditTaskRepositoryInMemory } from "../../../modules/Task/usecases/EditTask/infra/repositories/inmemory/EditTaskRepositoryInMemory";

let editTaskRepository: EditTaskRepositoryInMemory;
let editTaskService: EditTaskService;

describe('-- EditTaskService --', () => {
  beforeEach(() => {
    editTaskRepository = new EditTaskRepositoryInMemory();
    editTaskService = new EditTaskService(editTaskRepository);
  });

  test('should set task as done', async () => {
    const taskId = uuidV4();

    editTaskRepository.tasks.push(
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
          created_at: new Date(),
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
          created_at: new Date(),
        }
      }
    );

    const result = await editTaskRepository.update(taskId, true);

    expect(result.id).toBe(taskId);
    expect(result.done).toBe(true);
  })
})