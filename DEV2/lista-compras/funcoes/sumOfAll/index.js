const UI = require('../inputsAndOutputs')
const {
    labelValor
} = UI
let somaPreco = 0

module.exports = function (preco, quantidade) {
    somaPreco += parseFloat(preco) * quantidade
    labelValor.innerHTML = (somaPreco) || 0
}