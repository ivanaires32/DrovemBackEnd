import { db } from "../Database/dataBase.js";

export async function getDados(req, res) {
    try {
        const turmas = await db.query(`
            SELECT name_turma, id FROM turmas
        ;`)

        const alunos = await db.query(`
            SELECT name, id FROM alunos
        ;`)

        const projetos = await db.query(`
            SELECT name_project, id FROM projetos
        ;`)

        res.status(200).send({ turmas: turmas.rows, alunos: alunos.rows, projetos: projetos.rows })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postEntregar(req, res) {

    const { alunoSelect, turmaSelect, projetoSelect, linkProject } = res.locals.dadosProjeto

    try {

        await db.query(`
            INSERT INTO entregas (id_aluno, id_turma, id_project, link_project)
            VALUES ($1, $2, $3, $4)
        ;`, [alunoSelect, turmaSelect, projetoSelect, linkProject])

        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}