const UI = require('../inputsAndOutputs')
module.exports = function () {
    let {
        inputQuantidade,
        inputPreco,
        inputDescricao
    } = UI
    inputQuantidade.value = null
    inputPreco.value = null
    inputDescricao.value = ""
}