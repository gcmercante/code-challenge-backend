import { v4 as uuidV4 } from 'uuid';
import { Project } from '../../../infra/db/entities/Project';
import { CreateProjectService } from '../../../modules/Project/usecases/CreateProject/CreateProjectService';
import { CreateProjectRepositoryInMemory } from '../../../modules/Project/usecases/CreateProject/infra/repositories/inmemory/CreateProjectRepositoryInMemory';

let createProjectRepository: CreateProjectRepositoryInMemory;
let createProjectService: CreateProjectService;

describe('-- CreateProjectService --', () => {
  beforeEach(() => {
    createProjectRepository = new CreateProjectRepositoryInMemory();
    createProjectService = new CreateProjectService(createProjectRepository);
  })

  test('should create a new valid project', async () => {
    const result = await createProjectService.execute({
      title: 'Teste',
      user: {
        id: uuidV4(),
      }
    });

    expect(result).toBeInstanceOf(Project);
    expect(result.title).toBe('Teste');
  })
})