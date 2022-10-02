import { container } from 'tsyringe';

import { CreateProjectRepository } from '../../usecases/CreateProject/infra/repositories/CreateProjectRepository';
import { ICreateProjectRepository } from '../../usecases/CreateProject/infra/repositories/interfaces/ICreateProjectRepository';

import { DeleteProjectRepository } from '../../usecases/DeleteProject/infra/repositories/DeleteProjectRepository';
import { IDeleteProjectRepository } from '../../usecases/DeleteProject/infra/repositories/interfaces/IDeleteProjectRepository';

import { EditProjectRepository } from '../../usecases/EditProject/repositories/EditProjectRepository';
import { IEditProjectRepository } from '../../usecases/EditProject/repositories/interfaces/IEditProjectRepository';

import { GetProjectsRepository } from '../../usecases/GetProjects/infra/repositories/GetProjectsRepository';
import { IGetProjectsRepository } from '../../usecases/GetProjects/infra/repositories/interfaces/IGetProjectsRepository';


container.registerSingleton<IGetProjectsRepository>('GetProjectsRepository', GetProjectsRepository);
container.registerSingleton<ICreateProjectRepository>('CreateProjectRepository', CreateProjectRepository);
container.registerSingleton<IDeleteProjectRepository>('DeleteProjectRepository', DeleteProjectRepository);
container.registerSingleton<IEditProjectRepository>('EditProjectRepository', EditProjectRepository);