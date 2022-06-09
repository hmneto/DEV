const socketIO = require('socket.io')
let jogadoresConectados = {}

function socketServer(server) {
    const io = socketIO(server)

    io.on('connection', function(socket) {
        socket.on('adicionarJogador', function(jogadorParaSerAdicionado) {
            const jogadorParsed = JSON.parse(jogadorParaSerAdicionado)
            console.log(jogadorParsed)
            const { IDdoSocket } = jogadorParsed
            jogadoresConectados[IDdoSocket] = jogadorParsed
        })

        socket.on('jogadorAtual', function(jogadorParaSerSincronizado) {
            if (jogadorParaSerSincronizado) {
                const jogadorParaSerSincronizadoParsed = JSON.parse(jogadorParaSerSincronizado)
                let { x, y, z, idJogador } = jogadorParaSerSincronizadoParsed
                jogadoresConectados[idJogador] = jogadorParaSerSincronizadoParsed
                socket.emit('listaDeJogadoresPosicionados', JSON.stringify(jogadoresConectados))
            }
        })

        socket.on('disconnect', function() {
            socket.broadcast.emit('jogadorSaiu', JSON.stringify(socket.id))
            delete jogadoresConectados[socket.id]
        });
    })
}

module.exports = socketServer