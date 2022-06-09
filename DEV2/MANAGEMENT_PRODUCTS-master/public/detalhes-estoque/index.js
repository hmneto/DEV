var url_string = window.location.href
var url = new URL(url_string)
var c = url.searchParams.get("id")
document.getElementById('id_da_peca').value = c

document.getElementById('editar').addEventListener('click', function () {
    window.location = '/editar-estoque/?id=' + c
})

fetch(`/estoque/${c}`).then(function (response) {
    console.log(response)
    return response.text()
}).then(function (respo) {

    if (JSON.parse(respo)[0]) {
        let {
            id,
            nome_da_peca,
            quantidade,
            preco,
            porcentagem,
        } = JSON.parse(respo)[0]
        document.getElementById('nome_da_peca').innerHTML = nome_da_peca
        document.getElementById('quantidade').innerHTML = quantidade
        document.getElementById('id').innerHTML = id
        document.getElementById('preco').innerHTML = preco
        document.getElementById('porcentagem').innerHTML = porcentagem
        document.getElementById('vendaValor').innerHTML = (preco * porcentagem / 100) + preco


    }


    // document.getElementById('porcentagem').innerHTML = custo_unitario
})

fetch(`/imagem/${c}`).then(function (response) {
    return response.text()
}).then(function (respo) {
    a = JSON.parse(respo)

    let div = document.getElementById('imagens')
    a.forEach(element => {
        let img = document.createElement('img')
        let button = document.createElement('button')

        button.textContent = 'apagar imagem'

        button.style.color = 'black'
        button.style.backgroundColor = 'red'

        button.addEventListener('click', function () {

            if (prompt('senha') == 5869) {
                fetch('/imagem/' + element.id, {
                    method: 'delete'
                }).then(function (a) {
                    console.log(a)
                    window.location.reload()
                })
            }
        })

        img.src = element.url
        img.addEventListener('click', function () {
            window.location = element.url
        })
        img.width = 300
        div.appendChild(img)
        div.appendChild(button)
    })
})

asd = document.getElementById('apagar')

asd.addEventListener('click', function () {
    if (prompt('senha') == 5869)
        fetch(`/estoque/${c}`, {
            method: 'delete'
        }).then(function (response) {
            return response.text()
        }).then(function (respo) {
            window.location = '/lista-estoque/'

        })
})