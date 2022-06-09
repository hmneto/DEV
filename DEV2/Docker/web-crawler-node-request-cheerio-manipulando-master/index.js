var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

request('http://www.imdb.com/chart/moviemeter', function(err, res, body){
    if(err) console.log(err)
    let site = cheerio.load(body)
    listaDeFilmes = site('.lister-list tr')
    let filmesRuins = 0
    listaDeFilmes.each(function(){
        nome = (site(this).find('.titleColumn a').text().trim())
        nota = (site(this).find('.imdbRating strong').text().trim())
        //fs.appendFile('imdb.txt', `nome do filme ${nome} nota do filme ${nota} \n`)
        nota = Number(nota)
        if(nota>8){
            console.log('nome:', nome, 'nota:', nota)
            filmesRuins++
        }

        
        
    })
    console.log('quantidade de filmes ruins encontrados:', filmesRuins)
})