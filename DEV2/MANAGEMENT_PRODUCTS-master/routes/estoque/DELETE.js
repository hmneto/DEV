const router = require('express').Router()
const { s3 } = require('../../service/aws-s3')

const DELETE_WHERE_FOREIGN_ESTOQUE = require('../../models/imagem/DELETE_WHERE_FOREIGN_ESTOQUE')
const SELECT_WHERE_FOREIGN_ESTOQUE = require('../../models/imagem/SELECT_WHERE_FOREIGN_ESTOQUE')
const DELETE_WHERE_ID = require('./../../models/estoque/DELETE_WHERE_ID')

router.delete('/estoque/:id', async function (req, res) {
    const { id } = req.params
    let u
    await DELETE_WHERE_ID(id)

    // recebe todas as imagens onde o id do estoque está presente no registro da imagem
    await SELECT_WHERE_FOREIGN_ESTOQUE(id).then(callback => u = callback) 
    
    u.forEach(element)
    await res.redirect('/lista-estoque/')
})
module.exports = router

function element(element) {
    const config = {
        Bucket: `${process.env.AWS_BUCKET}`,
        Key: element.chave
    }
    DELETE_WHERE_FOREIGN_ESTOQUE(element.id_peca)
    if (element.chave)
        s3.deleteObject(config).promise()
}