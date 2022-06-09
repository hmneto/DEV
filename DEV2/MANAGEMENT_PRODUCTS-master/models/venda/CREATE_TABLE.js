var abreBanco = require('../../service/database')

const client = abreBanco()

// client.then(err=>console.log(err))
const query = `
    CREATE TABLE IF NOT EXISTS ${process.env.DATABASE_MYSQL}.venda (
        id int not null auto_increment,
        nome_da_peca varchar(100) not null,
        quantidade int not null,
        preco FLOAT(6,2) not null,
        criado DATETIME not null,
        editado DATETIME,
        primary key(id)
    )
`


function callback(err, conn) {
    if (err) console.log(err)
    // else console.log(conn)
}

module.exports = async () => {
    await client.then(connection => connection.query(query, callback))
}