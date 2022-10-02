import { Router } from "express";
import { CreateTaskController } from "../../../modules/Task/usecases/CreateTask/CreateTaskController";

const createTaskController = new CreateTaskController();

const taskRoutes = Router();

taskRoutes.post('/', createTaskController.handle);

export { taskRoutes };