const UI = require('./funcoes/inputsAndOutputs')
const clearTable = require('./funcoes/clearTable')
const cleanStorage = require('./funcoes/cleanStorage')
const arrayToTable = require('./funcoes/arrayToTable')
const sumOfAll = require('./funcoes/sumOfAll')
const limparCampos = require('./../src/funcoes/cleanFields')
const getInputsHtml = require('./funcoes/getInputsHtml')
const criarElemento = require('../src/funcoes/createRowInTheTable')


window.onload = function () {
    let dadosTxt = localStorage.getItem('dados3')
    if (!dadosTxt) {
        dadosTxt = '[]'
    }

    const dados = JSON.parse(dadosTxt)
    arrayToTable(dados)
}

UI.buttonZerar.addEventListener('click', zerar)

UI.buttonRegistrar.addEventListener('click', registrar)

function zerar() {
    if (cleanStorage()) {
        clearTable(0, document.getElementsByTagName('tr').length - 1)
        sumOfAll()
    }

}



function registrar() {
    let dadosTxt = localStorage.getItem('dados3')
    if (!dadosTxt) {
        dadosTxt = '[]'
    }
    console.log(dadosTxt)

    let dados = JSON.parse(dadosTxt)


    // console.log()
    let {
        quantidade,
        preco,
        descricao
    } = getInputsHtml()

    // console.log(quantidade, preco, descricao)

    // console.log(dados)

    // dados = JSON.parse(dados)

    console.log(dados)

    dados.push({
        quantidade,
        preco,
        descricao
    })

    localStorage.setItem('dados3', JSON.stringify(dados))
    limparCampos()
    if (quantidade && preco && descricao)
        criarElemento('tabela', quantidade, preco, descricao, parseFloat(preco) * quantidade)
    sumOfAll(preco, quantidade)
}