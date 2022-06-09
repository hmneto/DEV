const databaseResolve = require('./../../service/databaseResolve')
const abreBanco = require('../../service/database')
const client = abreBanco()

module.exports = id => new Promise(SELECT_WHERE_ID(id))

function SELECT_WHERE_ID(id) {
    const query = `SELECT * FROM ${process.env.DATABASE_MYSQL}.imagens where id=${id}`
    return (resolve, reject) => client.then(connection => connection.query(query, databaseResolve(resolve,reject)))
}