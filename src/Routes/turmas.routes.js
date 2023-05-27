import { Router } from "express";
import { getAluno, getTurmas } from "../Controllers/turmas.controllers.js";
import { validationAluno } from "../Middlewares/validationAluno.middleware.js";

const turmaRouter = Router()

turmaRouter.get("/turmas/:id_turma", getTurmas)
turmaRouter.get("/turmas/:id_turma/:cpf", validationAluno, getAluno)

export default turmaRouter