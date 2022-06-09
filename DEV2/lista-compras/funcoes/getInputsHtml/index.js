const UI = require('../inputsAndOutputs')

function criarObjetoRegistro(inputQuantidade, inputPreco, inputDescricao) {
    return {
        quantidade: inputQuantidade,
        preco: inputPreco,
        descricao: inputDescricao
    }
}

function registrar() {
    let {
        inputQuantidade,
        inputPreco,
        inputDescricao
    } = UI

    if (inputQuantidade.value && String(inputQuantidade.value).indexOf(".") < 0)
        console.log('')
    else
        throw "parametro invalido em quantidade";

    return criarObjetoRegistro(inputQuantidade.value, inputPreco.value, inputDescricao.value)
}

module.exports = registrar