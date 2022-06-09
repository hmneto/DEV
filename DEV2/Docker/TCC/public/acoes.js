$('#btn-js').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
    //alert('aaaa')
})

$('#btn-node').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
    //alert('aaaa')
})

$('#btn-novoProjeto').on("click", function () {
    telanodeOuJs.seen = true
    telanovoOuImportar.seen = false
})




//script teleprincipal
$(document).ready(function () {
  $("#btn-condicional").click(function () {
    $("#div-condicional").show();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
  });
  $("#btn-repeticao").click(function () {
    $("#div-repeticao").show();
    $("#div-condicional").hide();
    $("#div-declaracao").hide();
  });

  $("#btn-declaracao").click(function () {
    $("#div-declaracao").show();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
  });


});