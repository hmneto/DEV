var Jimp = require("jimp");

var fileName = 'teste.png';
var imageCaption = 'primeira imagem';
var loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
    })
    .then(function (font) {
        loadedImage.print(font, 10, 10, imageCaption)
                   .write(fileName);
    })
    .catch(function (err) {
        console.error(err);
    })
