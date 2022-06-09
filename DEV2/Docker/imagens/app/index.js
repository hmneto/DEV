const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
var router = express.Router()
app.use(router)
console.log(__dirname)
app.use(express.static('public'))
app.set('view engine', 'jade')
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
})

router.get('/img',function(req,res){
    res.sendFile('/app/public/i.txt')
})

router.post('/upload', function(req, res){
    const file = fs.createWriteStream('public/i.txt')
    let t
    req.on('data',function(chunk){
        t+=chunk
        file.write(chunk)   
    }).on('end',function(){
        file.end() 
        res.send({status: t})
    })
    
})
app.listen(3000, err => {
    if (err) console.log(err)
    else { console.log('server running') }
})