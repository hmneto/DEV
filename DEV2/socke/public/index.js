// const THREE = require('three')
const socket = require('socket.io-client')()
const { cena, camera, renderer, cubo } = require('./libs/elementosDo3D')(THREE)
let jogadoresTela = {}

const mesh = require('./libs/criaMalha')(jogadoresTela, cena, cubo)
const comandosDo3D = require('./libs/comandosDo3D')







window.onload = function() {
    document.body.appendChild(renderer.domElement)
    renderer.setSize(window.innerWidth - 40, window.innerHeight - 40)
    animar()
}

new Promise(function(resolve) {
    socket.on('connect', function() {
        resolve(socket.id)
    })
}).then(function(IDdoSocket) {
    jogadoresTela = mesh(IDdoSocket)
    const { x, y, z } = jogadoresTela[IDdoSocket].position
    socket.emit('adicionarJogador', JSON.stringify({ x, y, z, IDdoSocket }))
})


function animar() {
    requestAnimationFrame(animar)
    renderer.render(cena, camera)
    ObjJsonSocket = comandosDo3D(jogadoresTela, socket.id)
    socket.emit('jogadorAtual', JSON.stringify(ObjJsonSocket))
}


socket.on('listaDeJogadoresPosicionados', function(jogadoresConectados) {
    const jogadoresConectadosParsedJson = JSON.parse(jogadoresConectados)
    const jogadoresConectadosParsedArray = Object.keys(jogadoresConectadosParsedJson)

    jogadoresConectadosParsedArray.forEach(function(JogadorConectado) {
        console.log(jogadoresConectadosParsedJson)
        const { idJogador, x, y, z } = jogadoresConectadosParsedJson[JogadorConectado]

        if (idJogador != socket.id) {

            if (!jogadoresTela[JogadorConectado]) {
                jogadoresTela = mesh(JogadorConectado)

            }
            jogadoresTela[idJogador].position.set(x, y, z)
        }

    })
})

socket.on('jogadorSaiu', function(idDoJogadorQueSaiu) {
    let selectedObject = cena.getObjectByName(JSON.parse(idDoJogadorQueSaiu))
    cena.remove(selectedObject)
})