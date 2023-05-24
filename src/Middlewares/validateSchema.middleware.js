export function validationSchema(schema) {
    return (req, res, next) => {
        const validate = schema.validate(req.body, { abortEarly: false })

        if (validate.error) {
            const erros = validate.error.details.map(d => d.message)
            res.status(400).send(erros)
        }

        next()
    }
}