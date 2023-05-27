import { db } from "../Database/dataBase.js"

export async function getTurmas(req, res) {
    const { id_turma } = req.params
    try {
        //autenticar
        const turmas = await db.query(`
            SELECT * FROM alunos
            WHERE id_turma=$1
        ;`, [id_turma])

        res.status(200).send(turmas.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getAluno(req, res) {
    const { cpf } = req.params
    try {

        const aluno = await db.query(`
            SELECT * FROM alunos
            WHERE cpf=$1
        ;`, [cpf])

        const transicoes = await db.query(`
            SELECT transicoes.entrada, transicoes.saida, turmas.name_turma FROM transicoes
            JOIN turmas ON transicoes.id_turma = turmas.id
            WHERE transicoes.cpf_aluno=$1
        ;`, [cpf])

        delete aluno.rows[0].id
        delete aluno.rows[0].id_turma
        delete aluno.rows[0].created_at

        res.status(200).send({ ...aluno.rows[0], transicoes: transicoes.rows })
    } catch (err) {
        res.status(500).send(err.message)
    }
}