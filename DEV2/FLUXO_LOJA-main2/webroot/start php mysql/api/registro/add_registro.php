<?php
$ttsdfg = json_decode($_POST['a']);
require '../Database/Conexao.php';
require './JWT.php';

try {
    $conn = new Conexao();
    $instancia_SQL = $conn->getInstancia();
    $stmt = $instancia_SQL->prepare("INSERT INTO `registros` 
    (`nome_entrada`, `valor`, `data`, `tipo_fluxo`, `fluxo_id`, `id_dono`) 
    VALUES (?, ?, ?, ?, ?, ?)");

    $sucess = $stmt->execute([
        $ttsdfg->nome,
        $ttsdfg->entrada,
        $ttsdfg->data,
        $ttsdfg->tipo_entrada,
        $ttsdfg->fluxo_id,
        JWT::decode($_POST['b'], getenv('token'))->id
    ]);

    // echo $sucess;
} catch (Exception $th) {
    echo $th->getMessage();
}


