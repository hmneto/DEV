<?php

require_once 'App/Auth.php';

if ($usuario && $perm) {
    header('Location: ./logado.php');
}else{
    header('Location: login.php');
}