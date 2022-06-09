
const fs = require('fs')
fs.readFile('./build/index.html', function read(err, data) {
    if (err) {
        console.log(err)
        throw err;
    }

    manipula(String(data));
});

function manipula(okok) {
    String.prototype.insert = function (index, string) {
        if (index > 0) {
            return this.substring(0, index) + string + this.substring(index, this.length);
        }

        return string + this;
    };

    const corte = okok.split("src")

    const srcdot = corte.map((element, index) => {
        let st = element.insert(0, "src")
        let s2 = st.insert(5, ".")

        if (index === 0) return element
        return s2
    });

    const withdot = srcdot.reduce((anterios,atual)=>{
        const novo = anterios += atual
        return novo
    },'')

    

    const corte2 = withdot.split('href')

    const srcdot2 = corte2.map((element, index) => {
        let st = element.insert(0, "href")
        let s2 = st.insert(6, ".")
        
        if (index === 0) return element
        return s2
    });

    const arquivo = srcdot2.reduce((anterios,atual)=>{
        const novo = anterios += atual
        return novo
    },'')


    fs.writeFile('./build/index.html', arquivo, function(erro) {

        if(erro) {
            throw erro;
        }
    
        console.log("Arquivo salvo");
    }); 


}


