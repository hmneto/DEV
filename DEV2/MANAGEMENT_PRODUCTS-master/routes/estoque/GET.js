const rota = require('express').Router()
const SELECT_ALL = require('../../models/estoque/SELECT_ALL')
const SELECT_WHERE_ID = require('../../models/estoque/SELECT_WHERE_ID')

rota.get('/estoque/:id?', async function (req, res) {
  let produtoTxt
  const { id } = req.params
  if (id)
    await SELECT_WHERE_ID(id).then(retornoProdutoEstoque => produtoTxt = retornoProdutoEstoque)
  else
    await SELECT_ALL().then(retornoProdutoEstoque => produtoTxt = retornoProdutoEstoque)
  await res.send(produtoTxt)
})
module.exports = rota