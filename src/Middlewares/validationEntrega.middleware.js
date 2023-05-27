import { db } from "../Database/dataBase.js"

export async function validationEntrega(req, res, next) {
    const { alunoSelect, turmaSelect, projetoSelect, linkProject } = req.body
    try {
        if (!alunoSelect || !turmaSelect || !projetoSelect || !linkProject) return res.status(404).send("Projeto não enviado")

        const aluno = await db.query(`
            SELECT alunos.id AS aluno, turmas.id AS turma, projetos.id AS projeto FROM alunos
            JOIN turmas ON turmas.id = ${turmaSelect}
            JOIN projetos ON projetos.id = ${projetoSelect}
            WHERE alunos.id = ${alunoSelect}
        `)

        if (!aluno.rows[0].aluno || !aluno.rows[0].turma || !aluno.rows[0].projeto) return res.status(404).send("Projeto não enviado")

        res.locals.dadosProjeto = { alunoSelect, turmaSelect, projetoSelect, linkProject }

        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}