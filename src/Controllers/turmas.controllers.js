import { db } from "../Database/dataBase.js"

export async function getTurmas(req, res) {
    const { id } = req.params
    try {
        //autenticar
        const turmas = await db.query(`
            SELECT * FROM alunos
            WHERE id_turma=$1
        ;`, [id])

        res.status(200).send(turmas.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}