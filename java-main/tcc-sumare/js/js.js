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
     /*BOTOES PALAVRAS RESERVADAS*/
      $("#btn_p_reservadas").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_p_reservadas").click(function () {
        $("#div-p-reservadas").show();
    });
    
     $("#btn-voltar-p-reservadas").click(function () {
        $("#div-p-reservadas").hide();
    });
    $("#btn-voltar-p-reservadas").click(function () {
        $("#div-inicio").show();
     });
       /*FUNÇÕES*/
      $("#btn_funcoes").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_funcoes").click(function () {
        $("#div-p-funcoes").show();
    });
    
     $("#btn-voltar-p-funcoes").click(function () {
        $("#div-p-funcoes").hide();
    });
    $("#btn-voltar-p-funcoes").click(function () {
        $("#div-inicio").show();
     });
       
    /*VARIAVEIS*/

    $("#btn_variaveis").click(function () {
        $("#inicio").hide();
    });
    $("#btn_variaveis").click(function () {
        $("#variaveis").show();
    });
      $("#btn_voltar_2").click(function () {
        $("#variaveis").hide();
    });

    $("#btn_voltar_2").click(function () {
        $("#inicio").show();
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

});
	