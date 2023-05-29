import joi from "joi"

export const entregaSchema = joi.object({
    alunoSelect: joi.number().integer().min(1).required(),
    turmaSelect: joi.number().integer().min(1).required(),
    projetoSelect: joi.number().integer().min(1).required(),
    linkProject: joi.string().uri().required()
})