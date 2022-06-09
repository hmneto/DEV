let func = function () {
    alert('ok')
}


//setInterval(func, 3000)

/*

let NavegacaoInicial = {
    botaoNovoProjeto: {
        acao: 'iniciar o projeto e direcionar o usuario para as opcoes de tipo de projeto'
        , botaoNode: {
            acao: 'gera arquivo que seja padrao nodejs que a extenção salva é .js '
            , direciona: navegacaoDoCodificador
        }
        , botaoNavegador: {
            acao: 'gera um arquivo que seja padrao de navegadores. extenção salva é html e o codigo fica em volta de uma tag <script>'
            , direciona: navegacaoDoCodificador
        }
    }
}

let navegacaoDoCodificador = {
    botaoDeclarar: {
        acao: 'ira abrir as opcoes de declaracao de objetos, variaveis, codicionais, constantes, try catch, repeticoes e funcoes'
    }
    , botaoInserir: {
        acao: 'ira abrir os botoes referentes a colocar codigo na tela dentro do escopo escolido'
    }
}

{

}

*/



let j = document.createElement('button')
j.innerHTML = 'ok'
document.body.appendChild(j)

let pegaElemento = function(){
    console.log(this)
}



let teste = function(){
    j.click()
}

j.addEventListener('click', pegaElemento)


teste()







