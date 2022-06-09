const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('../../service/databaseResolve')
module.exports = id => new Promise(DELETE_WHERE_FOREIGN_ESTOQUE(id))

function DELETE_WHERE_FOREIGN_ESTOQUE(id) {
    const query = `DELETE FROM ${process.env.DATABASE_MYSQL}.imagens WHERE id_peca=${id}`
    return (resolve, reject) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, reject)))
}