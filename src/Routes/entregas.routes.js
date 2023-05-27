import { Router } from "express";
import { getDados, postEntregar } from "../Controllers/entrega.controlles.js";
import { validationEntrega } from "../Middlewares/validationEntrega.middleware.js";

const entregaRouter = Router()

entregaRouter.get("/entregar", getDados)
entregaRouter.post("/entregar", validationEntrega, postEntregar)


export default entregaRouter