import { Router } from "express";
import { CreateTaskController } from "../../../modules/Task/usecases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "../../../modules/Task/usecases/DeleteTask/DeleteTaskController";

const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();

const taskRoutes = Router();

taskRoutes.post('/', createTaskController.handle);
taskRoutes.delete('/:id', deleteTaskController.handle);

export { taskRoutes };