import { Router } from "express";
import { projectRoutes } from "./project.routes";
import { taskRoutes } from "./task.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.get('/ping', (req, res) => res.json({message: 'ALOOOOOOOO'}));
router.use('/project', projectRoutes);
router.use('/task', taskRoutes)
router.use('/user', userRoutes)

export { router };