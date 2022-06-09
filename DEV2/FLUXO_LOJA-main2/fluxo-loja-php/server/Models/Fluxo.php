<?php
class Fluxo
{
    public function GetFluxos()
    {
        require 'Conexao.php';
        $connect = new Conexao();  
        $inputPost =  json_decode(file_get_contents('php://input'));
        return $connect->exec_db("select * from fluxo where id_dono = ?;",
        [$inputPost->login]);
    }
}