"use strict";

var imagetext = require("./imagetext");

(function() {

    var textItems = {
        northwest: "NorthWest",
        // southeast: "This is the SouthEast",
        // southwest: "This is the southern and western item",
        // center: "In the middle"
    };
    imagetext.addAllText("./img/200.png", "./img/201.png", textItems, "#f60");

})();
