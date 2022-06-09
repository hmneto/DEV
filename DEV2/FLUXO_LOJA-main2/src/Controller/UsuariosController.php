<?php

namespace App\Controller;

use App\Controller\AppController;

class UsuariosController extends AppController
{
    public function index()
    {

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: *');
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit(0);
        }
        error_reporting(0);
        $this->autoRender = false;
        $b = json_decode($this->request->getBody()->getContents());
        $f = $this->Usuarios->find('All')
            ->where(['email' => $b->login])
            ->where(['senha' => hash('sha256', $b->senha)])
            ->first();

        if ($f) {
            $token = JWT::encode($f, getenv('token'));
            print_r($token);
        } else {
            echo '';
        }

    }

    public function cadastro()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: *');
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit(0);
        }

        $this->autoRender = false;
        error_reporting(0);
        $usuario = $this->Usuarios->newEntity();
        $user_from_browser = json_decode($this->request->getBody()->getContents());
        $usuario->email = $user_from_browser->email;
        $usuario->senha = hash('sha256', $user_from_browser->senha);

        if ($this->Usuarios->save($usuario)) {
            // print_r($usuario);
            print_r(json_encode('{cadastro:true}'));
        }else{
            print_r(json_encode('{cadastro:false}'));
        }
    }
}
