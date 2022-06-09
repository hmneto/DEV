<?php 

require './JWT.php';
require '../Database/Conexao.php';

try {
    $conn = new Conexao();
    $consulta_SQL = "SELECT * FROM `fluxo` WHERE `id_dono` = ?";
    $instancia_db = $conn->getInstancia();
    $stmt = $instancia_db->prepare($consulta_SQL);
    // echo JWT::encode($_POST['id'],getenv('token'));
    // exit;

    // print_r( JWT::decode($_POST['id'], getenv('token')));
    // exit;

    $stmt->execute([JWT::decode($_POST['id'], getenv('token'))]);
    $resultado = $stmt->fetchAll();
} catch (Exception $th) {
    // throw $th;
}

print_r(json_encode($resultado));