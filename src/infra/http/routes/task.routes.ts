import { Router } from "express";

import { CreateTaskController } from "../../../modules/Task/usecases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "../../../modules/Task/usecases/DeleteTask/DeleteTaskController";
import { EditTaskController } from "../../../modules/Task/usecases/EditTask/EditTaskController";
import { ensureAuth } from "../middlewares/ensureAuth";

const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();
const editTaskController = new EditTaskController();

const taskRoutes = Router();

taskRoutes.post('/', ensureAuth, createTaskController.handle);
taskRoutes.delete('/:id', ensureAuth, deleteTaskController.handle);
taskRoutes.put('/:id', ensureAuth, editTaskController.handle);

export { taskRoutes };