const openDatabase = require('../service/database')
const databaseResolve = require('./../service/databaseResolve')
const clientDB = openDatabase()

const query = `
    CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_MYSQL}
    default character set utf8 
    default collate utf8_general_ci
`

module.exports = () => clientDB.then(connection => connection.query(query, databaseResolve))