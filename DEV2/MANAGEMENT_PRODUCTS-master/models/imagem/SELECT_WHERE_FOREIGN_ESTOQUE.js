const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('./../../service/databaseResolve')
module.exports = (id) => new Promise(SELECT_WHERE_FOREIGN_ESTOQUE(id))

function SELECT_WHERE_FOREIGN_ESTOQUE(id) {
    const query = `SELECT * FROM ${process.env.DATABASE_MYSQL}.imagens where id_peca=${id}`
    return (resolve, reject) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, reject)))
}