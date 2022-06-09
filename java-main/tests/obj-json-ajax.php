<?php
header('Access-Control-Allow-Origin: *');  

$dados = file_get_contents('php://input');

$dados_abertos = json_decode($dados);

$obj = json_encode($dados_abertos);

echo $obj;