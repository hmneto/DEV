const fs = require('fs')

module.exports = {
    lerArquivo2: (arquivo) => { return new Promise((resolve) => { fs.readFile(arquivo, (erro, conteudo) => resolve(erro, conteudo)) }) },


    lerArquivo: function (arquivo) {
        return new Promise(function (resolve) {
            fs.readFile(arquivo, function (err, conteudo) {
                resolve(conteudo.toString())
            })
        })
    },
    escreverArquivo: function (arquivo, conteudo) {
        return new Promise(function (resolve) {
            fs.writeFile(arquivo, conteudo, function (erro) {
                if (erro) console.log(erro)
            })
        })
    },

    stdin: function () {
        let inputStd = ''

        process.stdin.on('data', function (data) {
            inputStd += data
        })


        process.stdin.on('end', function () {
            const lines = inputStd.split('\n')
            console.log(lines)
        })
    },

    sistema: function () {
        return process.env
    },

    auth: function () {
        var express = require('express'),
            app = express(),
            session = require('express-session');
        app.use(session({
            secret: '2C44-4D44-WppQ38S',
            resave: true,
            saveUninitialized: true
        }));

        // Authentication and Authorization Middleware
        var auth = function (req, res, next) {
            if (req.session && req.session.user === "amy" && req.session.admin)
                return next();
            else
                return res.sendStatus(401);
        };

        // Login endpoint
        app.get('/login', function (req, res) {
            if (!req.query.username || !req.query.password) {
                res.send('login failed');
            } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
                req.session.user = "amy";
                req.session.admin = true;
                res.send("login success!");
            }
        });

        // Logout endpoint
        app.get('/logout', function (req, res) {
            req.session.destroy();
            res.send("logout success!");
        });

        // Get content endpoint
        app.get('/content', auth, function (req, res) {
            res.send("You can only see this after you've logged in.");
        });

        app.listen(3000);
        console.log("app running at http://localhost:3000");
    },
    streamVideo: function () {
        const fs = require('fs');
        const express = require('express');
        const app = express();

        app.get('/', (req, res) => {
            res.end(`<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>VideoFlix</title>
              <meta name="viewport" content="width=device-width,initial-scale=1">
            </head>
            <body style="text-align:center">
              <div style="margin:0 auto;">
                <!-- Mude o src dessa tag para o nome do video que você possuir -->
                <video src="300.mp4" controls width="640" height="480"></video>
              </div>
            </body>
          </html>`)
        });

        app.get('/movies/:movieName', (req, res) => {
            const { movieName } = req.params;
            const movieFile = `./movies/${movieName}`;
            fs.stat(movieFile, (err, stats) => {
                if (err) {
                    console.log(err);
                    return res.status(404).end('<h1>Movie Not found</h1>');
                }
                // Variáveis necessárias para montar o chunk header corretamente
                const { range } = req.headers;
                const { size } = stats;
                const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
                const end = size - 1;
                const chunkSize = (end - start) + 1;
                // Definindo headers de chunk
                res.set({
                    'Content-Range': `bytes ${start}-${end}/${size}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunkSize,
                    'Content-Type': 'video/mp4'
                });
                // É importante usar status 206 - Partial Content para o streaming funcionar
                res.status(206);
                // Utilizando ReadStream do Node.js
                // Ele vai ler um arquivo e enviá-lo em partes via stream.pipe()
                const stream = fs.createReadStream(movieFile, { start, end });
                stream.on('open', () => stream.pipe(res));
                stream.on('error', (streamErr) => res.end(streamErr));
            });
        });
        app.listen(80, () => console.log('VideoFlix Server!'));

    },
    audioStream: function () {
        const express = require('express')
            , app = express()
            , fs = require('fs')
            , getStat = require('util').promisify(fs.stat);

        app.use(express.static('public'));

        // 10 * 1024 * 1024 // 10MB
        // usamos um buffer minúsculo! O padrão é 64k
        const highWaterMark = 2;

        app.get('/audio', async (req, res) => {

            const filePath = './audio.ogg';
            const stat = await getStat(filePath);
            console.log(stat);

            // informações sobre o tipo do conteúdo e o tamanho do arquivo
            res.writeHead(200, {
                'Content-Type': 'audio/ogg',
                'Content-Length': stat.size
            });

            const stream = fs.createReadStream(filePath, { highWaterMark });

            // só exibe quando terminar de enviar tudo
            stream.on('end', () => console.log('acabou'));

            // faz streaming do audio 
            stream.pipe(res);
        });

        app.listen(3000, () => console.log('app is running'));
    }
}