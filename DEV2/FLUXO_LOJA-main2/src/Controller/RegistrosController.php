<?php
namespace App\Controller;
use App\Controller\AppController;
use App\Controller\Conexao;
class RegistrosController extends AppController
{
    public function index()
    {
        $this->autoRender = false;
        error_reporting(0);
        $reqbody = $this->request->getBody()->getContents();
        $reqbodyObj= json_decode($reqbody);
        $arrayConf = ["fluxo_id"=>$reqbodyObj];
        $ddd = $this->Registros->find("All")
        ->where($arrayConf);
        $encoded = json_encode($ddd);
        print_r($encoded);
    }


    public function listar(){
        $this->autoRender = false;
        error_reporting(0);
        $conexao = new Conexao;
        $instancia = $conexao->getInstancia();
        $id = $_POST['id'];
        $sql = "SELECT *
        FROM `registros`
        WHERE `id` = $id
        LIMIT 50";
        $stmt = $instancia->prepare($sql);  
        $stmt->execute([1]);
        $result = $stmt->fetchAll();
        print_r($result);
    }

    public function registro()
    {
        $this->autoRender = false;
        error_reporting(0);
        $o = json_decode($this->request->getBody()->getContents()); 
        $token = JWT::decode($o->login, getenv('token'));
        $o->login = $token;
        $o->resultado = json_encode(
            $this->Registros->find('All')
        ->where(['id'=>$o->id])
        ->where(['id_dono'=>$o->login->id])
        ->first()
        );
        print_r($o->resultado);
    }

    public function editar()
    {
        $this->autoRender = false;
        error_reporting(0);
        $o = json_decode($this->request->getBody()->getContents());
        $token = JWT::decode($o->login, getenv('token'));
        $o->login = $token;
        $a = $this->Registros->newEntity();
        $a->id = $o->obj->id;
        $a->nome_entrada = $o->obj->nome_entrada;
        $a->valor = $o->obj->valor;
        $a->data = $o->obj->data;
        $a->tipo_fluxo = $o->obj->tipo_fluxo;
        $a->fluxo_id = $o->obj->fluxo_id;

        if ($this->Registros->save($a)) {
            print_r(json_encode($a));
        }else{
            echo 'dont save';
        }
    }

    public function salvar()
    {
        $this->autoRender = false;
        error_reporting(0);
        $brows=json_decode($this->request->getBody()->getContents());
        $token = JWT::decode($brows->b, getenv('token'));
        $registro=$this->Registros->newEntity();
        $registro->nome_entrada = $brows->a->nome;
        $registro->valor = $brows->a->entrada;
        $registro->data = $brows->a->data;
        $registro->tipo_fluxo = $brows->a->tipo_entrada;
        $registro->fluxo_id = $brows->a->fluxo_id;
        $registro->id_dono = $token->id;
        if($this->Registros->save($registro))
        print_r(json_encode($registro));
    }
}