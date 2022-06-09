module.exports = function (elementoTabela, quantidade, preco, descricao, soma,c) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let btn = document.createElement("button")

    btn.addEventListener('click', function(){
        console.log(c)
    })
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(btn)

    let textQuantidade = document.createTextNode(quantidade)
    let textPreco = document.createTextNode(preco)
    let textDescricao = document.createTextNode(descricao)
    let textSoma = document.createTextNode(soma)
    let txtbtn = document.createTextNode('excluir')

    td1.appendChild(textQuantidade)
    td2.appendChild(textPreco)
    td3.appendChild(textDescricao)
    td4.appendChild(textSoma)
    btn.appendChild(txtbtn)



    document.getElementById(elementoTabela).appendChild(tr)
}
