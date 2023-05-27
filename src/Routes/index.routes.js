import { Router } from "express";
import loginRouter from "./login.routes.js";
import turmaRouter from "./turmas.routes.js";
import entregaRouter from "./entregas.routes.js";

const router = Router()

router.use(loginRouter)
router.use(turmaRouter)
router.use(entregaRouter)

export default router