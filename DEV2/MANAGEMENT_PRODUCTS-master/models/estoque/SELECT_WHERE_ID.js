const openDataBase = require('../../service/database')
const clientDB = openDataBase()
const databaseResolve = require('../../service/databaseResolve')
module.exports = id => new Promise(SELECT_WHERE_ID(id))

function SELECT_WHERE_ID(id) {
    const query = `SELECT * FROM ${process.env.DATABASE_MYSQL}.estoque where id=${id}`
    return (resolve, reject) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, reject)))
}