import { Router } from "express";

import { CreateTaskController } from "../../../modules/Task/usecases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "../../../modules/Task/usecases/DeleteTask/DeleteTaskController";
import { EditTaskController } from "../../../modules/Task/usecases/EditTask/EditTaskController";

const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();
const editTaskController = new EditTaskController();

const taskRoutes = Router();

taskRoutes.post('/', createTaskController.handle);
taskRoutes.delete('/:id', deleteTaskController.handle);
taskRoutes.put('/:id', editTaskController.handle);

export { taskRoutes };