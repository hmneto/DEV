<?php
require '../Database/Conexao.php';
require './JWT.php';

try {
    $conn = new Conexao();
    $consulta_SQL = "SELECT id_usuario, email, senha 
                    FROM `usuarios` 
                    WHERE `email` = ? 
                    AND `senha` = ? 
                    LIMIT 1";
    $instancia_db = $conn->getInstancia();
    $stmt = $instancia_db->prepare($consulta_SQL);
    $senha_hashed = hash('sha256', $_POST['senha']);
    $stmt->execute([$_POST['email'], $senha_hashed]);
    $resultado = $stmt->fetch();
} catch (Exception $th) {
    // throw $th;
}

if($resultado){
    $retorno = [];
    $usuario = $resultado['id_usuario'];
    $jwt = JWT::encode($usuario, getenv('token'));
    $retorno['user_connected'] = $jwt;
    $retorno = json_encode($retorno);
    print_r($retorno);
}
