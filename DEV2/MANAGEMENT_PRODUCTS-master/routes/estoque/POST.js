const router = require('express').Router()
const upload = require('../../service/multer-config')

const INSERT_ONE_ESTOQUE = require('../../models/estoque/INSERT_ONE')
const INSERT_ONE_IMAGEM = require('../../models/imagem/INSERT_ONE')

router.post('/estoque/', upload.single('imagem'), async function (req, res, next) {
    const { body, file } = req
    const { nome_da_peca, quantidade, preco, porcentagem, tamanho } = body
    let valorDaPromessaSelect
    await INSERT_ONE_ESTOQUE(nome_da_peca, quantidade, preco, porcentagem, tamanho).then(callback => valorDaPromessaSelect = callback)
    if (file) {
        const { originalname, size, key, location } = file
        await INSERT_ONE_IMAGEM(
            valorDaPromessaSelect.insertId,
            originalname,
            size,
            key,
            location
        )
    }

    await res.redirect('/lista-estoque/')
})
module.exports = router