import { Router } from "express";
import { signUp } from "../Controllers/login.controller.js";
import { validationSchema } from "../Middlewares/validateSchema.middleware.js";
import { signupSchema } from "../Schemas/login.schema.js";

const loginRouter = Router()

loginRouter.post("/signup", validationSchema(signupSchema), signUp)

export default loginRouter