module.exports = function (dados) {
    const inputsAndOutputs = require('../inputsAndOutputs')
    const createRowInTheTable = require('../createRowInTheTable')
    let somaPreco = 0

   
    dados.forEach(function (a,c) {
        const {
            quantidade,
            preco,
            descricao
        } = a

    

        somaPreco += parseFloat(preco) * quantidade
        createRowInTheTable('tabela', quantidade, preco, descricao, parseFloat(preco) * quantidade,c)
        inputsAndOutputs.labelValor.innerHTML = (somaPreco)
    })

    // inputsAndOutputs.Saida.innerHTML = JSON.stringify(dados)
}