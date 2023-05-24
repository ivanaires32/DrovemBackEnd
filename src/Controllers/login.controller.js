import { db } from "../Database/dataBase.js"

export async function signUp(req, res) {
    const { name, cpf, email, foto, turma } = req.body
    try {

        //PENSAR
        const id_turma = await db.query(`
            SELECT id FROM turmas
            WHERE name=$1
        ;`, [turma])

        await db.query(`
            INSERT INTO alunos (name, email, cpf, foto, id_turma)
            VALUES ($1, $2, $3, $4, $5)
        ;`, [name, email, cpf, foto, id_turma.rows[0].id])

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}