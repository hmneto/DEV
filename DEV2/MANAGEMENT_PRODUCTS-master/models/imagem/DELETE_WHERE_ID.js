const openDatabase = require('../../service/database')
const databaseResolve = require('./../../service/databaseResolve')
const clientDB = openDatabase()
module.exports = id => new Promise(DELETE_WHERE_ID(id))

function DELETE_WHERE_ID(id) {
    // console.log(id)
    const query = `DELETE FROM ${process.env.DATABASE_MYSQL}.imagens WHERE id=${id}`
    return (resolve, reject) => clientDB.then(connection => connection.query(query, databaseResolve(resolve, reject)))
} 