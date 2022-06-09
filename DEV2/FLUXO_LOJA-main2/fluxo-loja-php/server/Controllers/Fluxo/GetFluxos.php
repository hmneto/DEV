<?php
    require('../../Models/Fluxo.php'); 
    $fluxo = new Fluxo();
    echo(json_encode($fluxo->GetFluxos()));
?>