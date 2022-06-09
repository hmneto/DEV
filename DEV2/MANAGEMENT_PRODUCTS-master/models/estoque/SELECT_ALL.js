const abreBanco = require('../../service/database')
const client = abreBanco()
const databaseResolve = require('./../../service/databaseResolve')
module.exports = () => new Promise(SELECT_ALL())

function SELECT_ALL() {
    const query = `SELECT * FROM ${process.env.DATABASE_MYSQL}.estoque`
    return (resolve, reject) => client.then(connection => connection.query(query, databaseResolve(resolve, reject)))
}