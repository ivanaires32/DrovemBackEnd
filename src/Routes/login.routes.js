import { Router } from "express";
import { signUp } from "../Controllers/login.controller.js";
import { validationSchema } from "../Middlewares/validateSchema.middleware.js";
import { signupSchema } from "../Schemas/login.schema.js";
import { validateSignUp } from "../Middlewares/validationLogin.middleware.js";

const loginRouter = Router()

loginRouter.post("/signup", validationSchema(signupSchema), validateSignUp, signUp)

export default loginRouter