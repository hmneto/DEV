const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('../../service/databaseResolve')
module.exports = id => new Promise(DELETE_WHERE_ID(id))

function DELETE_WHERE_ID(id){
    const query = `DELETE FROM ${process.env.DATABASE_MYSQL}.estoque WHERE id=${id}`
    return (resolve,reject) => clientDB.then(connection => connection.query(query, databaseResolve(resolve,reject)))
}