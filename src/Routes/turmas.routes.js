import { Router } from "express";
import { getAluno, getTurmas } from "../Controllers/turmas.controllers.js";

const turmaRouter = Router()

turmaRouter.get("/turmas/:id_turma", getTurmas)
turmaRouter.get("/turmas/:id_turma/:id", getAluno)

export default turmaRouter