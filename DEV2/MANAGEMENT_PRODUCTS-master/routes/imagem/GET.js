const rota = require('express').Router()
const select_where_id_imagem_peca = require('../../models/imagem/SELECT_WHERE_FOREIGN_ESTOQUE')

rota.get('/imagem/:id?', function (req, res) {
  function retornoProdutoEstoque(produtoEstoque) {
    produtoTxt = JSON.stringify(produtoEstoque)
    res.send(produtoTxt)
  }

    const { id } = req.params

    // se: verifica se a entrada possui algum id para a busca do registro
    if (id)
      // select feito com parametro where para retornar registro por id do estoque
      select_where_id_imagem_peca(id).then(retornoProdutoEstoque)

    // senão: select de todos os dados do estoque
    else
      res.send('ok')

})

module.exports = rota