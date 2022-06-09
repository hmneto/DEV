var express = require('express');
var router = express.Router();
var convert = require('xml-js');
var fs = require('fs'),
    path = require('path'),
    xmlReader = require('read-xml');


const abreBanco = require('./database')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'))
});

router.post('/data', async function (req, res) {
    const { nome, pasta, pagina, icone } = req.body

    const dados = func(pasta, nome)

    const conn = await abreBanco()

    dados.forEach(function (aa) {
        // const { nome, cordenadas } = aa
        const cords = aa.cordenadas.split(',')
        // console.log(cords[0], cords[1])
        // console.log(aa)


        conn.query(`INSERT INTO xxxxx.pontos (nome_ponto, latitude, longitude, pagina, icone_id, criado_em)VALUES ('${aa.nome}', '${cords[1]}', '${cords[0]}', '${pagina}', '${icone}', now())`, (err, rows) => {
            // console.log(rows,err)
        })
    })
    res.send('terminou')
})

module.exports = router;


function func(pasta, nome) {
    const arraya = []
    var FILE = path.join(__dirname, './doc.kml');

    xmlReader.readXML(fs.readFileSync(FILE), function (err, data) {
        if (err) {
            console.error(err);
        }

        var xml = data.content;
        var result = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }));
        result.kml.Document.Style.forEach(function (h) {
            // console.log(h)
            // console.log(h._attributes.id)
            // console.log(h.IconStyle)
        })
        // console.log(result.kml.Document)
        // console.log(result.kml.Document.name)
        // console.log(result.kml.Document.Snippet)
        // console.log(result.kml.Document.LookAt)
        result.kml.Document.StyleMap.forEach(function (c) {
            // console.log(c._attributes.id)
            // console.log(c.Pair)
        })
        result.kml.Document.Document.forEach(function (d, e) {
            if (e === 0) {
                // console.log(d)
                // console.log(d.StyleMap.Pair)
                // console.log(d.name)
                d.Style.forEach(function (f, g) {
                    // console.log(f)
                })
                // console.log(d.folder)
            }
        })

        result.kml.Document.Folder.forEach(function (a) {
            // console.log(a..name._text)

            if (a.name._text === pasta) {
                a.Placemark.forEach(function (b, m) {
                    // console.log(b.styleUrl._text)
                    try {
                        // if (b.name._text === nome || b.name._text.indexOf(nome)>-1) {
                            if(b.styleUrl._text === '#msn_K110_60_0_1_0_0_0_0_0_0_0_4_0_1_0_1_0_0_1_1_5_16_0_5_0_17_9')

                            arraya.push({
                                nome: b.name._text,
                                cordenadas: b.Point.coordinates._text
                            })
                            // console.log(b.name._text)
                            // console.log(b.Point.coordinates._text)
                         
                        // }


                    } catch (error) {

                    }
                })
            }
        })

    });
    return arraya
}


///////////////////////////////////////////////////////////////////////////////////

const dados = func('KM', "KM")

// const conn = await abreBanco()

dados.forEach(function (aa) {
    // const { nome, cordenadas } = aa
    const cords = aa.cordenadas.split(',')
    // console.log(cords[0], cords[1])
    console.log(aa)


    // conn.query(`INSERT INTO xxxxx.pontos (nome_ponto, latitude, longitude, pagina, icone_id, criado_em)VALUES ('${aa.nome}', '${cords[1]}', '${cords[0]}', '${pagina}', '${icone}', now())`, (err, rows) => {
    //     // console.log(rows,err)
    // })
})