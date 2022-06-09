const router = require('express').Router()
const insert_imagem = require('../../models/imagem/INSERT_ONE')



// importando o arquivo que tem as configurações do midleware do multer
const upload = require('../../service/multer-config')

// callback da promise do select

router.post('/imagem', upload.single('imagem'), function (req, res, next) {
    const { body, file } = req

    const { id_da_peca } = body

    if (file) {
        const {
            originalname,
            size,
            key,
            location
        } = file

        insert_imagem(
            id_da_peca, 
            originalname, 
            size, 
            key, 
            location)
        res.redirect('/detalhes-estoque?id=' + id_da_peca)
    }
})

module.exports = router