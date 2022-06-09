function ad() {
    if (d.value.indexOf(','))
        d.value = d.value.replace(',', '.')
}


var url_string = window.location.href
var url = new URL(url_string)
var urlId = url.searchParams.get("id")

a = document.getElementById('nome_da_peca')

b = document.getElementById('quantidade')

c = document.getElementById('preco')

d = document.getElementById('porcentagem')

e = document.getElementById('tamanho')

document.getElementById('voltar').href = '/detalhes-estoque/?id=' + urlId

document.getElementById('enviar').addEventListener('click', function () {

    const nome_da_peca = a.value
    const quantidade = b.value
    const preco = c.value
    const porcentagem = d.value
    const tamanho = e.value
    const body = {
        nome_da_peca,
        quantidade,
        preco,
        porcentagem,
        tamanho
    }

    // const headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    // }

    fetch('/estoque/' + urlId, {
        method: 'put',
        // headers,
        body: JSON.stringify(body)
    }).then(dados => window.location = '/detalhes-estoque/?id=' + urlId)
})