const fs = require('fs')
const readable = fs.createReadStream(`${__dirname}\\teste.js`)
let count = 0
readable.on('data', function(data){
   console.log(count++, data)
   readable.pause()
   setTimeout(function(){
       readable.resume()
   },10000)
})

readable.on('readable', function(){
    while(chunk = readable.read()){
        console.log(chunk)
    }
})
