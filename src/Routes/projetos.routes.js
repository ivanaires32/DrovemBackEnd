import { Router } from "express";
import { notas, postProjects } from "../Controllers/projetos.controlles.js";
import { notasSchema } from "../Schemas/notas.schema.js";
import { validationSchema } from "../Middlewares/validateSchema.middleware.js";

const projectRouter = Router()

projectRouter.post("/projetos", postProjects)
projectRouter.post("/notas", validationSchema(notasSchema), notas)

export default projectRouter