<?php
require '../Database/Conexao.php';

try {
    $conn = new Conexao();
    $instancia_SQL = $conn->getInstancia();
    $stmt = $instancia_SQL->prepare("INSERT INTO usuarios (email,senha) VALUES(?,?)");
    $sucess = $stmt->execute([$_POST['email'], hash('sha256', $_POST['senha'])]);
    if($sucess)
        echo 'salvou';
    else
        echo 'não salvou';

} catch (Exception $th) {
    echo $th->getMessage();
}