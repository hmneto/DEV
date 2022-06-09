const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('../../service/databaseResolve')
module.exports = (
    nome_da_peca,
    quantidade,
    preco,
    porcentagem,
    tamanho
) => new Promise(INSERT_ONE(nome_da_peca, quantidade, preco, porcentagem, tamanho))

function INSERT_ONE(nome_da_peca, quantidade, preco, porcentagem, tamanho) {
    const datetime = new Date()
    const dataAtualizada = `${datetime.toISOString().slice(0, 10)} ${datetime.toTimeString().slice(0, 8)}`
    const query = `
            INSERT INTO ${process.env.DATABASE_MYSQL}.estoque 
            (nome_da_peca, quantidade, preco, porcentagem, tamanho, criado) 
            values 
            ('${nome_da_peca}', 
            ${quantidade}, 
            ${String(preco).replace(',', '.')}, 
            ${String(porcentagem).replace(',', '.')}, 
            '${tamanho}', 
            '${dataAtualizada}')
        `
    return (resolve, rejeita) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, rejeita)))
}