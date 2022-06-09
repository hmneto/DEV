<?php
namespace App\Controller;
use App\Controller\AppController;
class FluxoController extends AppController
{
    public function index()
    {
        $this->autoRender = false;
        error_reporting(0);
        $stringJWT = $this->request->getBody()->getContents();
        $token = JWT::decode($stringJWT, getenv('token'));
        print_r(json_encode($this->Fluxo->find('All')->where(['id_dono'=>$token->id])));
    }

    public function create()
    {
        $this->autoRender = false;
        error_reporting(0);
        $o = json_decode($this->request->getBody()->getContents());
        $token = JWT::decode($o->login, getenv('token'));
        $o->login = $token->id;
        $fluxo = $this->Fluxo->newEntity();
        $fluxo->nome_fluxo = $o->fluxo;
        $fluxo->id_dono = $o->login;
        if($this->Fluxo->save($fluxo)){
            print_r($o);
        }
    }
}