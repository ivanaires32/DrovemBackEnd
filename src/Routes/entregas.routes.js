import { Router } from "express";
import { getDados, postEntregar } from "../Controllers/entrega.controlles.js";
import { validationEntrega } from "../Middlewares/validationEntrega.middleware.js";
import { validationSchema } from "../Middlewares/validateSchema.middleware.js";
import { entregaSchema } from "../Schemas/entregas.schema.js";

const entregaRouter = Router()

entregaRouter.get("/entregar", getDados)
entregaRouter.post("/entregar", validationSchema(entregaSchema), validationEntrega, postEntregar)


export default entregaRouter