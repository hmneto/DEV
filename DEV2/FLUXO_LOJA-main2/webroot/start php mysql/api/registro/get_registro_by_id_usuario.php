<?php

require '../Database/Conexao.php';

try {
    $conn = new Conexao();
    $instancia_SQL = $conn->getInstancia();
    $stmt = $instancia_SQL->prepare("SELECT * FROM `registros` WHERE `fluxo_id` = ?");
    $sucess = $stmt->execute([$_POST['id_fluxo']]);
    $resultado = $stmt->fetchAll();
} catch (Exception $th) {
    echo $th->getMessage();
}

print_r(json_encode($resultado));