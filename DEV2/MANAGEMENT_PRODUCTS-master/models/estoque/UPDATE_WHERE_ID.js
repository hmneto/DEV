const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('./../../service/databaseResolve')
module.exports = (
    id,
    nome_da_peca,
    quantidade,
    preco,
    porcentagem,
    tamanho
) => new Promise(UPDATE_WHERE_ID(id, nome_da_peca, quantidade, preco, porcentagem, tamanho))

function UPDATE_WHERE_ID(id, nome_da_peca, quantidade, preco, porcentagem, tamanho) {
    const datetime = new Date();
    const actualTime = `${datetime.toISOString().slice(0, 10)} ${datetime.toTimeString().slice(0, 8)}`

    const query = `
    UPDATE ${process.env.DATABASE_MYSQL}.estoque 
    SET 
    nome_da_peca='${nome_da_peca}',
    quantidade=${quantidade},
    preco=${String(preco).replace(',', '.')},
    porcentagem=${String(porcentagem).replace(',', '.')},
    tamanho='${tamanho}',
    editado='${actualTime}'
    WHERE 
    id=${id};   
`
    return (resolve, rejeita) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, rejeita)))
}