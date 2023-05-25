import { Router } from "express";
import loginRouter from "./login.routes.js";
import turmaRouter from "./turmas.routes.js";

const router = Router()

router.use(loginRouter)
router.use(turmaRouter)

export default router