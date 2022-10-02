import { container } from 'tsyringe';

// Project Module Injections
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

// Task Module Injections
import { CreateTaskRepository } from '../../modules/Task/usecases/CreateTask/infra/repositories/CreateTaskRepository';
import { ICreateTaskRepository } from '../../modules/Task/usecases/CreateTask/infra/repositories/interfaces/ICreateTaskRepository';

import { DeleteTaskRepository } from '../../modules/Task/usecases/DeleteTask/infra/repositories/DeleteTaskRepository';
import { IDeleteTaskRepository } from '../../modules/Task/usecases/DeleteTask/infra/repositories/interfaces/IDeleteTaskRepository';

import { EditTaskRepository } from '../../modules/Task/usecases/EditTask/infra/repositories/EditTaskRepository';
import { IEditTaskRepository } from '../../modules/Task/usecases/EditTask/infra/repositories/interface/IEditTaskRepository';

container.registerSingleton<ICreateTaskRepository>('CreateTaskRepository', CreateTaskRepository);
container.registerSingleton<IDeleteTaskRepository>('DeleteTaskRepository', DeleteTaskRepository);
container.registerSingleton<IEditTaskRepository>('EditTaskRepository', EditTaskRepository);

// User Module Injections
import { ISignUpRepository } from '../../modules/User/usecases/SignUp/infra/repositories/interfaces/ISignUpRepository';
import { SignUpRepository } from '../../modules/User/usecases/SignUp/infra/repositories/SignUpRepository';

import { ISignInRepository } from '../../modules/User/usecases/SignIn/infra/repositories/interfaces/ISignInRepository';
import { SignInRepository } from '../../modules/User/usecases/SignIn/infra/repositories/SignInRepository';

container.registerSingleton<ISignUpRepository>('SignUpRepository', SignUpRepository);
container.registerSingleton<ISignInRepository>('SignInRepository', SignInRepository);
