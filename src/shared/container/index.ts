import { container } from 'tsyringe';

import { CreateProjectRepository } from '../../modules/Project/usecases/CreateProject/infra/repositories/CreateProjectRepository';
import { ICreateProjectRepository } from '../../modules/Project/usecases/CreateProject/infra/repositories/interfaces/ICreateProjectRepository';

import { DeleteProjectRepository } from '../../modules/Project/usecases/DeleteProject/infra/repositories/DeleteProjectRepository';
import { IDeleteProjectRepository } from '../../modules/Project/usecases/DeleteProject/infra/repositories/interfaces/IDeleteProjectRepository';

import { EditProjectRepository } from '../../modules/Project/usecases/EditProject/repositories/EditProjectRepository';
import { IEditProjectRepository } from '../../modules/Project/usecases/EditProject/repositories/interfaces/IEditProjectRepository';

import { GetProjectsRepository } from '../../modules/Project/usecases/GetProjects/infra/repositories/GetProjectsRepository';
import { IGetProjectsRepository } from '../../modules/Project/usecases/GetProjects/infra/repositories/interfaces/IGetProjectsRepository';


container.registerSingleton<IGetProjectsRepository>('GetProjectsRepository', GetProjectsRepository);
container.registerSingleton<ICreateProjectRepository>('CreateProjectRepository', CreateProjectRepository);
container.registerSingleton<IDeleteProjectRepository>('DeleteProjectRepository', DeleteProjectRepository);
container.registerSingleton<IEditProjectRepository>('EditProjectRepository', EditProjectRepository);