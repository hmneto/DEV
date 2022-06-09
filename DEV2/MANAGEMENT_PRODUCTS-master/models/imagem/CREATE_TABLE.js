const openDatabase = require('../../service/database')
const clientDB = openDatabase()
const databaseResolve = require('./../../service/databaseResolve')
module.exports = () => clientDB.then(connection => connection.query(query, databaseResolve))

const query = `
CREATE TABLE IF NOT EXISTS ${process.env.DATABASE_MYSQL}.imagens (
	id int primary key auto_increment,
    id_peca int,
    nome varchar(150),
    tamanho varchar(20),
    chave varchar(150),
    url varchar(150),
    criado DATETIME not null
)`
