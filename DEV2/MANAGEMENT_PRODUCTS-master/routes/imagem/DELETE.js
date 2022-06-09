const router = require('express').Router()
const DELETE_WHERE_ID = require('../../models/imagem/DELETE_WHERE_ID')
const SELECT_WHERE_ID = require('../../models/imagem/SELECT_WHERE_ID')

const { s3 } = require('../../service/aws-s3')

router.delete('/imagem/:id', function (req, res) {
    const { id } = req.params

    SELECT_WHERE_ID(id).then(u => {

        DELETE_WHERE_ID(id).then(() => {
            if (u[0].chave)
                s3.deleteObject({
                    Bucket: `${process.env.AWS_BUCKET}`,
                    Key: u[0].chave
                }).promise()

            res.send('ok')
        })
    })
})

module.exports = router