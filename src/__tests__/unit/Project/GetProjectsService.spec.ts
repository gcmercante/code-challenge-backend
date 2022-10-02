import { v4 as uuidV4 } from 'uuid';
import { GetProjectsService } from '../../../modules/Project/usecases/GetProjects/GetProjectsService';
import { GetProjectsRepositoryInMemory } from '../../../modules/Project/usecases/GetProjects/infra/repositories/inmemory/GetProjectsRepositoryInMemory';

let getProjectsRepository: GetProjectsRepositoryInMemory;
let getProjectsService: GetProjectsService

describe('-- GetProjectsService --', () => {
  beforeEach(() => {
    getProjectsRepository = new GetProjectsRepositoryInMemory();
    getProjectsService = new GetProjectsService(getProjectsRepository);
  });

  test('should return an array of user projects', async () => {
    const userId = uuidV4();
    getProjectsRepository.projects.push(
      {
        id: uuidV4(),
        title: 'Teste',
        user: {
          id: userId,
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
    const result = await getProjectsService.execute(userId);

    expect(result).toHaveLength(1);
  })

  test('should return an empty array of projects', async () => {
    const userId = uuidV4();
    getProjectsRepository.projects.push(
      {
        id: uuidV4(),
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
    const result = await getProjectsService.execute(userId);

    expect(result).toHaveLength(0);
  })
})