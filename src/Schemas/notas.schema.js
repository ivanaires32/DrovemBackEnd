import joi from "joi";

export const notasSchema = joi.object({
    id_entrega: joi.number().integer().min(1).required(),
    nota: joi.string().valid("Acima das Expectativas", "Dentro das Expectativas", "Abaixo das Expectativas", "Sem nota").required()
})