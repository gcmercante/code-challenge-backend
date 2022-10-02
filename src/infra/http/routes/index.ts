import { Router } from "express";
import { projectRoutes } from "./project.routes";

const router = Router();

router.get('/ping', (req, res) => res.json({message: 'ALOOOOOOOO'}));
router.use('/project', projectRoutes);

export { router };