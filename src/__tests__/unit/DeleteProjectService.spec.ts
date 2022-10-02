import { v4 as uuidV4 } from 'uuid';

import { DeleteProjectService } from "../../usecases/DeleteProject/infra/DeleteProjectService";
import { DeleteProjectRepositoryInMemory } from "../../usecases/DeleteProject/infra/repositories/inmemory/DeleteProjectRepositoryInMemory"

let deleteProjectRepository: DeleteProjectRepositoryInMemory;
let deleteProjectService: DeleteProjectService;

describe('-- DeleteProjectService --', () => {
  beforeEach(() => {
    deleteProjectRepository = new DeleteProjectRepositoryInMemory()
    deleteProjectService = new DeleteProjectService(deleteProjectRepository)
  })

  test('should delete project by id', async () => {
    const projectId = uuidV4();

    deleteProjectRepository.projects.push(
      {
        id: projectId,
        title: 'Teste',
        user: {
          id: uuidV4(),
          name: 'Teste',
          email: 'test',
          password: 'test',
        },
        tasks: []
      },
      {
        id: uuidV4(),
        title: 'Teste2',
        user: {
          id: uuidV4(),
          name: 'Teste',
          email: 'test',
          password: 'test',
        },
        tasks: []
      }
    )

    const result = await deleteProjectService.execute(projectId);

    expect(result).toBe(1);
  })
})