import { db } from "../Database/dataBase.js";

export async function getDados(req, res) {
    try {

        const alunos = await db.query(`
            SELECT name, id FROM alunos
        ;`)

        const projetos = await db.query(`
            SELECT name_project, id FROM projetos
        ;`)

        res.status(200).send({ alunos: alunos.rows, projetos: projetos.rows })

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postEntregar(req, res) {

    const { alunoSelect, turmaSelect, projetoSelect, linkProject } = res.locals.dadosProjeto

    try {

        await db.query(`
            INSERT INTO entregas (id_aluno, id_turma, id_project, link_project, result)
            VALUES ($1, $2, $3, $4, $5)
        ;`, [alunoSelect, turmaSelect, projetoSelect, linkProject, "Sem nota"])

        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}