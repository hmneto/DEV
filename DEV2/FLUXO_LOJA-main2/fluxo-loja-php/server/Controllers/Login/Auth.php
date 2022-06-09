<?php
    require('../../Models/Login.php'); 
    $login = new Login();
    echo(json_encode($login->Auth()));
?>