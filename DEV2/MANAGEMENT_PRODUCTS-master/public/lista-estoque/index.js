fetch('/estoque').then(function (response) {
    return response.text()
}).then(function (resposne) {
    const registros = JSON.parse(resposne)
    registros.forEach(function (element) {
        const {
            id,
            nome_da_peca,
            quantidade
        } = element
        criarElemento('tabela', id, nome_da_peca, quantidade)
    })
})

function criarElemento(elementoTabela, id, nome_da_peca, quantidade) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    let buttonDetalhes = document.createElement('button')
    buttonDetalhes.textContent = 'detalhes'

    buttonDetalhes.addEventListener('click', function () {
        window.location = '/detalhes-estoque/?id=' + id
    })
    let txtId = document.createTextNode(id)
    let textNomeDaPeca = document.createTextNode(nome_da_peca)
    let textQuantidade = document.createTextNode(quantidade)
    

    td1.appendChild(txtId)
    td2.appendChild(textNomeDaPeca)
    td3.appendChild(textQuantidade)
    td4.appendChild(buttonDetalhes)

    document.getElementById(elementoTabela).appendChild(tr)
}


// document.getElementById('sub').submit(function(){
//     document.getElementById('sub').disabled = true
// })

// document.getElementById('sub').addEventListener('click', function(){
//     
    
    
// })


var formID = document.getElementById("form");
var send = document.getElementById("sub");

var onSendClick = function (event) {
  if (formID.checkValidity()) {
    console.log(event.target.parentNode.classList)
    event.target.parentNode.classList.add("disabled");
    event.target.removeEventListener("click", onSendClick);
  }
}

send.addEventListener("click", onSendClick);