import { db } from "../Database/dataBase.js"

export async function validationEntrega(req, res, next) {
    const { alunoSelect, turmaSelect, projetoSelect, linkProject } = req.body
    try {

        const turmaDiferente = await db.query(`
            SELECT alunos.id, turmas.id FROM turmas
            JOIN alunos ON alunos.id_turma = ${turmaSelect}
            WHERE alunos.id = ${alunoSelect}
        `)

        if (turmaDiferente.rowCount === 0) return res.status(409).send("Aluno não pertence a essa turma")

        const projectRepeated = await db.query(`
            SELECT entregas.id_project, alunos.id FROM entregas
            JOIN alunos ON alunos.id = ${alunoSelect}
            WHERE entregas.id_project = ${projetoSelect}
        `)

        if (projectRepeated.rowCount !== 0) return res.status(409).send("Projeto já entregue")

        res.locals.dadosProjeto = { alunoSelect, turmaSelect, projetoSelect, linkProject }

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}