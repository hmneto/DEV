
let novoOuImportarTemplate = `
<!--
<!doctype html>
<html>

<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
        }

        .row {
            display: table;
            padding-top: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            width: 100%;
        }

        #banner-gradient {
            background-image: linear-gradient(45deg, rgb(122, 188, 255) 0%, rgb(96, 171, 248) 44%, rgb(64, 150, 238) 100%);
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: initial;
        }

        .col:empty {
            display: table-cell;
            height: 75px;
        }

        #myForm .col:empty {
            display: table-cell;
            height: 75px;
            position: relative;
        }

        #myForm .col:empty::after {
            content: "Add form elements here";
            color: rgb(136, 136, 136);
            position: absolute;
            left: 10px;
            top: 10px;
            display: block;
            width: 400px;
        }

        nav ul a,
        nav .brand-logo {
            color: rgb(68, 68, 68);
        }

        p {
            line-height: 2rem;
        }

        .parallax-container .section {
            width: 100%;
        }

        footer.gram-footer ul.collection>li.collection-item,
        footer.gram-footer ul.collection>li.collection-header {
            background-image: initial;
            background-position-x: initial;
            background-position-y: initial;
            background-size: initial;
            background-repeat-x: initial;
            background-repeat-y: initial;
            background-attachment: initial;
            background-origin: initial;
            background-clip: initial;
            background-color: transparent;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        footer.gram-footer ul.collection {
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
            border-left-width: 0px;
            border-top-style: initial;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-top-color: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image-source: initial;
            border-image-slice: initial;
            border-image-width: initial;
            border-image-outset: initial;
            border-image-repeat: initial;
        }

        .input-field [type="checkbox"]+label,
        .input-field [type="radio"]:not(:checked)+label,
        .input-field [type="radio"]:checked+label {
            pointer-events: auto;
        }

        input:not([type]):focus:not([readonly]),
        input[type="text"]:not(.browser-default):focus:not([readonly]),
        input[type="password"]:not(.browser-default):focus:not([readonly]),
        input[type="email"]:not(.browser-default):focus:not([readonly]),
        input[type="url"]:not(.browser-default):focus:not([readonly]),
        input[type="time"]:not(.browser-default):focus:not([readonly]),
        input[type="date"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
        input[type="tel"]:not(.browser-default):focus:not([readonly]),
        input[type="number"]:not(.browser-default):focus:not([readonly]),
        input[type="search"]:not(.browser-default):focus:not([readonly]),
        textarea.materialize-textarea:focus:not([readonly]) {
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: orange;
            box-shadow: orange 0px 1px 0px 0px;
        }

        #contact input#your-email {
            color: rgb(255, 255, 255);
        }

        #contact textarea#your-message {
            color: rgb(255, 255, 255);
        }

        .icon-block .material-icons {
            font-size: inherit;
        }

        footer.page-footer {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        .col.m12 {
            text-align: center;
        }

        .green {
            height: 50px;
            width: 280px;
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
        }

        #izxfak {
            font-size: 36px;
            text-align: center;
        }

        #i50m8t {
            text-align: center;
        }

        @media only screen and (max-width: 992px) {
            .parallax-container .section {
                position: absolute;
                top: 40%;
            }
            #index-banner .section {
                top: 10%;
            }
        }

        @media only screen and (max-width: 600px) {
            #index-banner .section {
                top: 0px;
            }
        }

        @media (max-width: 480px) {
            .green {
                height: 50px;
                width: 280px;
                max-width: auto;
            }
            .green {
                height: 50px;
                width: 280px;
            }
        }
    </style>
</head>

<body>
    <div class="row">
        <div class="col m12">
            <div id="izxfak">VAMOS COMEÇAR
            </div>
        </div>
    </div>
    <div id="i50m8t" class="row">
        <div class="col m12">
            <a id="btn-novoProjeto" class="btn waves-effect waves-light green">novo</a>
        </div>
    </div>
    <div class="row">
        <div class="col m12">
            <a id="btn-importar" class="btn waves-effect waves-light green">importar</a>
        </div>
    </div>
    <!-- this page is generateded by Gramateria -->
</body>

</html>
-->

`

var telanovoOuImportar = new Vue({
	
	el: '#novoOuImportar',
	data : {
		template1 : novoOuImportarTemplate,
		seen : false
	}
	
})