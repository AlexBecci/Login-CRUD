import { Router } from "express";

import { authRequire } from "../middlewares/validateToken";

const router = Router();

router.get("/tasks", authRequire, (req, res) => res.send('tasks'))

export default router