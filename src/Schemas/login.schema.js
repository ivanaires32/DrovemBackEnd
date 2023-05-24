import joi from "joi"

export const signupSchema = joi.object({
    name: joi.string().trim().required(),
    cpf: joi.string().trim().length(11).pattern(/^\d+$/).required(),
    email: joi.string().email().required(),
    foto: joi.string().uri().required(),
    turma: joi.string().required()
})