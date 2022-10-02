import { Router } from "express";

import { CreateProjectController } from "../../../modules/Project/usecases/CreateProject/CreateProjectController";
import { DeleteProjectController } from "../../../modules/Project/usecases/DeleteProject/infra/DeleteProjectController";
import { EditProjectController } from "../../../modules/Project/usecases/EditProject/EditProjectController";
import { GetProjectController } from "../../../modules/Project/usecases/GetProjects/GetProjectsController";

const getProjectController = new GetProjectController();
const createProjectController = new CreateProjectController();
const deleteProjectController = new DeleteProjectController();
const editProjectController = new EditProjectController();

const projectRoutes = Router();

projectRoutes.get('/', getProjectController.handle);
projectRoutes.post('/', createProjectController.handle);
projectRoutes.delete('/:id', deleteProjectController.handle);
projectRoutes.put('/:id', editProjectController.handle);

export { projectRoutes };