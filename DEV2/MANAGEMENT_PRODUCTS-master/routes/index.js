const express = require('express')
const routers = express()

async function criaBanco() {
    // await require('../models/CREATE_DATABASE')()
    // require('../models/estoque/CREATE_TABLE')()
    // require('../models/imagem/CREATE_TABLE')()
    // require('../models/venda/CREATE_TABLE')()

    routers.use(require('./estoque/GET'))
    routers.use(require('./estoque/POST'))
    routers.use(require('./estoque/DELETE'))
    routers.use(require('./estoque/PUT'))

    routers.use(require('./imagem/GET'))
    routers.use(require('./imagem/POST'))
    routers.use(require('./imagem/DELETE'))
    
    routers.use(require('./venda/POST'))
}

criaBanco()

module.exports = routers