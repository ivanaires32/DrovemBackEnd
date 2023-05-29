import { db } from "../Database/dataBase.js"

export async function validationTransferir(req, res, next) {
    const { id_aluno, id_turma } = req.body

    try {

        const notAluno = await db.query(`
            SELECT id FROM alunos
            WHERE id = $1
        ;`, [id_aluno])

        if (notAluno.rowCount === 0) return res.status(404).send("Aluno não encontrado")

        const notTurma = await db.query(`
            SELECT id FROM turmas
            WHERE id = $1
        ;`, [id_turma])

        if (notTurma.rowCount === 0) return res.status(404).send("Turma não encontrada")

        next()

    } catch (err) {
        res.status(500).send(err.message)
    }
}