<?php
class Registro
{
    public function GetAll()
    {
        require 'Conexao.php';
        $connect = new Conexao();  
        $inputPost =  json_decode(file_get_contents('php://input'));
        return $connect->exec_db("select * from registros where fluxo_id = ? and id_dono = ?;",
        [$inputPost->fluxo_id,$inputPost->login]);
    }
}