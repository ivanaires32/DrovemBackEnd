import { Router } from "express";
import { postProjects } from "../Controllers/projetos.controlles.js";

const projectRouter = Router()

projectRouter.post("/projetos", postProjects)

export default projectRouter