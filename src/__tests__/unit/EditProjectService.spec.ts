import { v4 as uuidV4 } from 'uuid';

import { EditProjectService } from "../../usecases/EditProject/EditProjectService";
import { EditProjectRepositoryInMemory } from "../../usecases/EditProject/repositories/inmemory/EditProjectRepositoryInMemory";

let editProjectRepository: EditProjectRepositoryInMemory;
let editProjectService: EditProjectService

describe('-- EditProjectService --', () => {
  beforeEach(() => {
    editProjectRepository = new EditProjectRepositoryInMemory();
    editProjectService = new EditProjectService(editProjectRepository);
  });

  test('should edit project title by id', async () => {
    const projectId = uuidV4();
    editProjectRepository.projects.push(
      {
        id: projectId,
        title: 'Test',
        user: {
          id: uuidV4(),
          name: 'Test',
          email: 'test',
          password: 'test',
        },
        tasks: []
      },
      {
        id: uuidV4(),
        title: 'Test2',
        user: {
          id: uuidV4(),
          name: 'Test',
          email: 'test',
          password: 'test',
        },
        tasks: []
      }
    )

    const result = await editProjectService.execute(projectId, 'Test Edit');
    
    expect(result.id).toBe(projectId);
    expect(result.title).toBe('Test Edit');
  })
})