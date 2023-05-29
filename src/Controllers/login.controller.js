import { db } from "../Database/dataBase.js"

export async function signUp(req, res) {
    const { name, cpf, email, foto } = req.body
    try {
        const id_turma = res.locals.turma
        await db.query(`
            INSERT INTO alunos (name, email, cpf, foto, id_turma)
            VALUES ($1, $2, $3, $4, $5)
        ;`, [name, email, cpf, foto, id_turma])

        const id_aluno = await db.query(`
            SELECT id FROM alunos
            WHERE cpf = $1
        ;`, [cpf])

        await db.query(`
            INSERT INTO transicoes (cpf_aluno, id_turma, id_aluno)
            VALUES ($1, $2, $3)
       ;`, [cpf, id_turma, id_aluno.rows[0].id])

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}