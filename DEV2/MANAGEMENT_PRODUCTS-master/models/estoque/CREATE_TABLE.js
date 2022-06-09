const openDatabase = require('../../service/database')
const databaseResolve = require('./../../service/databaseResolve')
const clientDB = openDatabase()
module.exports = () => clientDB.then(connection => connection.query(query, databaseResolve))

const query = `
    CREATE TABLE IF NOT EXISTS ${process.env.DATABASE_MYSQL}.estoque (
        id int not null auto_increment,
        nome_da_peca varchar(100) not null,
        quantidade int not null,
        preco FLOAT(6,2) not null,
        porcentagem FLOAT(5,2) not null,
        tamanho varchar(6) not null,
        editado DATETIME,
        criado DATETIME not null,
        primary key(id)
    )`