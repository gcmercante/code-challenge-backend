import { Router } from "express";
import { CreateProjectController } from "../../../usecases/CreateProject/CreateProjectController";
import { DeleteProjectController } from "../../../usecases/DeleteProject/infra/DeleteProjectController";
import { EditProjectController } from "../../../usecases/EditProject/EditProjectController";
import { GetProjectController } from "../../../usecases/GetProjects/GetProjectsController";

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