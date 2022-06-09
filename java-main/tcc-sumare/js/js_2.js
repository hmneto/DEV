$(document).ready(function () {

    /* MONSTRAR E FECHAR(MAIS OU MENOS)*/
    $("#btn-menos").click(function () {
        $("#div-botoes").hide();
        $('#btn-menos').corner();
        $('#btn-mais').corner();
    });
    $("#btn-mais").click(function () {
        $("#div-botoes").show();
    });

    /*botoes operador all*/
    $("#btn_operadores_all").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_operadores_all").click(function () {
        $("#operadores_all").show();
    });

    $("#btn_voltar_operadores").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_voltar_operadores").click(function () {
        $("#div-inicio").show();
    });

    /*Operadores atribuição*/

    $("#btn_atribuicao").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_atribuicao").click(function () {
        $("#operadores_atribuicao").show();
    });

    $("#btn_voltar_operadores_atribuicao").click(function () {
        $("#operadores_atribuicao").hide();
    });
    $("#btn_voltar_operadores_atribuicao").click(function () {
        $("#operadores_all").show();
    });

    /*Operadores comparacao*/

    $("#btn_comparacao").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_comparacao").click(function () {
        $("#operadores_comparacao").show();
    });

    $("#btn_voltar_operadores_comparacao").click(function () {
        $("#operadores_comparacao").hide();
    });
    $("#btn_voltar_operadores_comparacao").click(function () {
        $("#operadores_all").show();
    });

    /*#operadores_aritmeticos*/
    $("#btn_aritmeticos").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_aritmeticos").click(function () {
        $("#operadores_aritmeticos").show();
    });

    $("#btn_voltar_operadores_aritmeticos").click(function () {
        $("#operadores_aritmeticos").hide();
    });
    $("#btn_voltar_operadores_aritmeticos").click(function () {
        $("#operadores_all").show();
    });

    /*#operadores_logicos*/
    $("#btn_logicos").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_logicos").click(function () {
        $("#operadores_logicos").show();
    });
    $("#btn_voltar_operadores_logicos").click(function () {
        $("#operadores_logicos").hide();
    });
    $("#btn_voltar_operadores_logicos").click(function () {
        $("#operadores_all").show();
    });



    /*BOTOES OBJETOS*/
    $("#btn_obj").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_obj").click(function () {
        $("#div-obj").show();
    });
    $("#btn_voltar_obj").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_voltar_obj").click(function () {
        $("#div-inicio").show();
    });


    /*BOTAO OBJETO WINDOWS*/
    $("#btn_obj_window").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_window").click(function () {
        $("#div-obj-window").show();
    });
    $("#btn_voltar_obj_window").click(function () {
        $("#div-obj-window").hide();
    });
    $("#btn_voltar_obj_window").click(function () {
        $("#div-obj").show();
    });

    /*BOTAO OBJETO DOCUMENT*/
    $("#btn_obj_document").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_document").click(function () {
        $("#div-obj-document").show();
    });
    $("#btn_voltar_obj_document").click(function () {
        $("#div-obj-document").hide();
    });
    $("#btn_voltar_obj_document").click(function () {
        $("#div-obj").show();
    });

    /*BOTAO OBJETO NAVIGATOR*/
    $("#btn_obj_navigator").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_navigator").click(function () {
        $("#div-obj-navigator").show();
    });
    $("#btn_voltar_obj_navigator").click(function () {
        $("#div-obj-navigator").hide();
    });
    $("#btn_voltar_obj_navigator").click(function () {
        $("#div-obj").show();
    });

    /*BOTAO OBJETO date*/
    $("#btn_obj_date").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_date").click(function () {
        $("#div-obj-date").show();
    });
    $("#btn_voltar_obj_date").click(function () {
        $("#div-obj-date").hide();
    });
    $("#btn_voltar_obj_date").click(function () {
        $("#div-obj").show();
    });
    /*BOTAO MATH*/
    $("#btn_obj_math").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_math").click(function () {
        $("#div-obj-math").show();
    });
    $("#btn_voltar_obj_math").click(function () {
        $("#div-obj-math").hide();
    });
    $("#btn_voltar_obj_math").click(function () {
        $("#div-obj").show();
    });

    /*BOTAO string*/
    $("#btn_obj_string").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_obj_string").click(function () {
        $("#div-obj-string").show();
    });
    $("#btn_voltar_obj_string").click(function () {
        $("#div-obj-string").hide();
    });
    $("#btn_voltar_obj_string").click(function () {
        $("#div-obj").show();
    });

    /*BOTOES PALAVRAS RESERVADAS*/
    $("#btn_p_reservada").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_p_reservada").click(function () {
        $("#div-p-reservada").show();
    });
    $("#btn_voltar_p_reservada").click(function () {
        $("#div-p-reservada").hide();
    });
    $("#btn_voltar_p_reservada").click(function () {
        $("#div-inicio").show();
    });
    /*BOTOES PALAVRAS RESERVADAS/REPETICAO*/
    $("#btn_p-reservada_repeticao").click(function () {
        $("#div-p-reservada").hide();
    });
    $("#btn_p-reservada_repeticao").click(function () {
        $("#div-p-reservada-repeticao").show();
    });
    /*voltar*/
    $("#btn_voltar_p_reservada-repeticao").click(function () {
        $("#div-p-reservada-repeticao").hide();
    });
    $("#btn_voltar_p_reservada-repeticao").click(function () {
        $("#div-p-reservada").show();
    });

    /*BOTOES PALAVRAS RESERVADAS/condicao*/
    $("#btn_p-reservada_condicao").click(function () {
        $("#div-p-reservada").hide();
    });
    $("#btn_p-reservada_condicao").click(function () {
        $("#div-p-reservada-condicao").show();
    });
     /*voltar*/
    $("#btn_voltar_p_reservada-condicao").click(function () {
        $("#div-p-reservada-condicao").hide();
    });
    $("#btn_voltar_p_reservada-condicao").click(function () {
        $("#div-p-reservada").show();
    });

 /*BOTOES PALAVRAS RESERVADAS/outros*/
    $("#btn_p-reservada_outros").click(function () {
        $("#div-p-reservada").hide();
    });
    $("#btn_p-reservada_outros").click(function () {
        $("#div-p-reservada-outros").show();
    });
    /*VOLTAR*/
    $("#btn_voltar_p_reservada-outros").click(function () {
        $("#div-p-reservada-outros").hide();
    });
    $("#btn_voltar_p_reservada-outros").click(function () {
        $("#div-p-reservada").show();
    });

    /*tooltip */
    $('[data-toggle="tool_atribuicao"]').tooltip();

    $('[data-toggle="tool_soma"]').tooltip();
    $('[data-toggle="tool_subtracao"]').tooltip();
    $('[data-toggle="tool_multiplicacao"]').tooltip();
    $('[data-toggle="tool_divisao"]').tooltip();
    $('[data-toggle="tool_igual"]').tooltip();
    $('[data-toggle="tool_menor"]').tooltip();
    $('[data-toggle="tool_maior"]').tooltip();
    $('[data-toggle="tool_diferente"]').tooltip();

    /*TOPNAV*/
    $('#aparece_top').mouseover(function () {
        $('#topnavId').show();
    });
    $('#div-inicio').mouseout(function () {
        $('#topnavId').hide();
    });


});



	