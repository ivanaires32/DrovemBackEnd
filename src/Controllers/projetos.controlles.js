import { db } from "../Database/dataBase.js"

export async function postProjects(req, res) {
    const { id_project, id_turma } = req.body

    const notas = []
    try {
        const projetos = await db.query(`
            SELECT entregas.id AS id_entrega, entregas.result, alunos.name, alunos.foto, alunos.id_turma AS turma_aluno FROM entregas
            JOIN alunos ON alunos.id = entregas.id_aluno
            WHERE id_project = $1
        ;`, [id_project])

        for (let i = 0; i < projetos.rows.length; i++) {
            const element = projetos.rows[i];
            if (element.turma_aluno === id_turma) {
                notas.push(element)
            }
        }

        res.status(200).send(notas)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function notas(req, res) {
    const { id_entrega, nota } = req.body
    try {

        await db.query(`
            UPDATE entregas SET result = $1
            WHERE id = $2
        ;`, [nota, id_entrega])
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}