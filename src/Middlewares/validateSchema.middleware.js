export function validationSchema(schema) {
    return (req, res, next) => {
        const validate = schema.validate(req.body, { abortEarly: false })

        if (validate.error) {
            const erros = validate.error.details.map(d => d.message)
            return res.status(404).send(erros)
        }

        next()
    }
}