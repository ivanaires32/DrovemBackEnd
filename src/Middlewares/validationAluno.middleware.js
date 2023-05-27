import { db } from "../Database/dataBase.js"

export async function validationAluno(req, res, next) {
    const { id_turma, cpf } = req.params
    try {
        if (!id_turma || !cpf) return res.sendStatus(404)
        const turma = await db.query(`
            SELECT id FROM turma
            WHERE id=$1
        ;`, [id_turma])

        if (!turma) return res.sendStatus(404)

        const aluno = await db.query(`
            SELECT cpf FROM aluno
            WHERE cpf=$1
        ;`, [cpf])

        if (!aluno) return res.sendStatus(404)

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}