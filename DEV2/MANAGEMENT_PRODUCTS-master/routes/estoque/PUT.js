const router = require('express').Router()
const UPDATE_WHERE_ID = require('../../models/estoque/UPDATE_WHERE_ID')

router.put('/estoque/:id', function (req, res) {

    req.on('data', function (chunk) {
        const { nome_da_peca, quantidade, preco, porcentagem, tamanho } = JSON.parse(chunk.toString())
        const { id } = req.params

        // console.log(nome_da_peca, quantidade, preco, porcentagem, tamanho)
        UPDATE_WHERE_ID(id, nome_da_peca, quantidade, preco, porcentagem, tamanho).catch(err => console.log(err))
        res.send({ nome_da_peca, quantidade, preco, porcentagem, tamanho })
    })
})

module.exports = router 