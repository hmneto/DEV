const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('./../../service/databaseResolve')
module.exports = (
    id_peca,
    nome,
    tamanho,
    chave,
    url
) => new Promise(INSERT_ONE(id_peca, nome, tamanho, chave, url))

function INSERT_ONE(id_peca, nome, tamanho, chave, url) {
    const datetime = new Date()
    const dataAtualizada = `${datetime.toISOString().slice(0, 10)} ${datetime.toTimeString().slice(0, 8)}`
    const query = `
        INSERT INTO ${process.env.DATABASE_MYSQL}.imagens 
        (id_peca, nome, tamanho, chave, url, criado) 
        values 
        ('${id_peca}', 
        '${nome}', 
        '${tamanho}', 
        '${chave}', 
        '${url}', 
        '${dataAtualizada}')`

    return (resolve, rejeita) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, rejeita)))
}