<?php
    require('../../Models/Registro.php'); 
    $registro = new Registro();
    echo(json_encode($registro->GetAll()));
?>