import { Router } from "express";
import { getTurmas } from "../Controllers/turmas.controllers.js";

const turmaRouter = Router()

turmaRouter.get("/turmas/:id", getTurmas)

export default turmaRouter