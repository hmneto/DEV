const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')


app.get('/', function(a,b){
    fs.readFile(path.resolve('./aula4.html'), function(err, data){
        b.send(data.toString())
    })
    
})


app.get('/bundle.js', function(a,b){
    fs.readFile('./bundle.js', function(err, data){
        b.send(data)
    })
})

app.listen(80)