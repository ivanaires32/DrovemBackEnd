import { Router } from "express";
import { allTurmasProjetos, getAllAlunos, getAluno, getTurmas, transferir } from "../Controllers/turmas.controllers.js";
import { validationAluno } from "../Middlewares/validationAluno.middleware.js";
import { validationTransferir } from "../Middlewares/validationTransferir.middleware.js";

const turmaRouter = Router()

turmaRouter.get("/turmas", allTurmasProjetos)
turmaRouter.get("/turmas/:id_turma", getTurmas)
turmaRouter.get("/turmas/:id_turma/:cpf", validationAluno, getAluno)
turmaRouter.get("/alunos", getAllAlunos)
turmaRouter.post("/transferir", validationTransferir, transferir)

export default turmaRouter