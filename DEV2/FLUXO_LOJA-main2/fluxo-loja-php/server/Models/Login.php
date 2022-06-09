<?php
class Login
{
    public function Auth()
    {
        require 'Conexao.php';
        $connect = new Conexao();  
        $inputPost =  json_decode(file_get_contents('php://input'));
        return $connect->exec_db("select id from usuarios where email = ? and senha = ? limit 1;",
        [$inputPost->user,$inputPost->password]);
    }
}