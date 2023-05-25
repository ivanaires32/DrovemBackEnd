import joi from "joi"

export const signupSchema = joi.object({
    name: joi.string().trim().required(),
    cpf: joi.string().max(11).min(11).required(),
    email: joi.string().email().required(),
    foto: joi.string().uri().required(),
    turma: joi.string().required()
})