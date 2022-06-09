const fs = require("fs");

fs.stat(__dirname+"/readable.js", function(err, stat){
    console.log(err, stat)
})
