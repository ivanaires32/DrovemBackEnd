import { db } from "../Database/dataBase.js"

export async function validateSignUp(req, res, next) {
    const { email, cpf, turma } = req.body
    try {
        const cpfRepeated = await db.query(`
            SELECT cpf FROM alunos
            WHERE cpf=$1
        `, [cpf])

        if (cpfRepeated.rowCount !== 0) return res.status(409).send("CPF ja cadastrado")

        const emailRepeated = await db.query(`
            SELECT email FROM alunos
            WHERE email=$1
        `, [email])

        if (emailRepeated.rowCount !== 0) return res.status(409).send("Email já cadastrado")

        //PENSAR
        const id_turma = await db.query(`
            SELECT id FROM turmas
            WHERE id=$1
        ;`, [turma])

        res.locals.turma = id_turma.rows[0].id

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }

}