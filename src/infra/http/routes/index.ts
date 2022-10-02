import { Router } from "express";
import { projectRoutes } from "./project.routes";
import { taskRoutes } from "./task.routes";

const router = Router();

router.get('/ping', (req, res) => res.json({message: 'ALOOOOOOOO'}));
router.use('/project', projectRoutes);
router.use('/task', taskRoutes)

export { router };