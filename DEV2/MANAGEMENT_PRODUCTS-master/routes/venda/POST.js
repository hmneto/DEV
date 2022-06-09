const router = require('express').Router()
const upload = require('../../service/multer-config')
const SELECT_WHERE_ID = require('../../models/estoque/SELECT_WHERE_ID')
const update_where_estoque = require('../../models/estoque/UPDATE_WHERE_ID')

router.post('/venda/', upload.single('imagem'), async function (req, res) {
    const { body } = req
    const objs = Object.keys(body)
    let attDados = []


    await Promise.all(objs.map(async (each) => {
        await SELECT_WHERE_ID(each).then(function (dados) {
            const [RowDataPacket] = dados

            const { id, nome_da_peca, quantidade } = RowDataPacket

            if (quantidade - body[each] >= 0) {
                attDados.push({ id, quantidade, nome_da_peca })
            }

        })
        
    }))

    await res.send(attDados)


    res.send(attDados)

    // update_where_estoque(RowDataPacket.id,RowDataPacket.nome_da_peca,RowDataPacket.quantidade - body[each])
    await console.log(objs.length)
    await console.log(attDados.length)


})
module.exports = router