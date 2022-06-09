<?php

namespace App\Controller;

class MyClass
{
    public function receve($context, $context_obj)
    {
        $context->autoRender = false;
        $data = json_decode($context->request->getBody()->getContents());
        $data_app = $context_obj->newEntity();
        $data_app->nome_entrada = $data->nome_entrada;
        $data_app->data = $data->data;
        $data_app->tipo_fluxo = $data->entrada;
        $data_app->valor = $data->valor;
        if ($context_obj->save($data_app)) {
            echo json_encode($data_app);
        }
    }


    public function send($context, $context_obj)
    {
        $context->autoRender = false;
        $dados = $context_obj->find('all');
        $context->response->body(json_encode($dados));
        $context->response->type('json');

        return $context->response;
    }

    public function edit($context, $context_obj)
    {
        $context->autoRender = false;
        $data = json_decode($context->request->getBody()->getContents());
        
        $data_app = $context_obj->newEntity();
        $data_app->id = $data->id;
        $data_app->nome_entrada = $data->nome_entrada;
        $data_app->data = $data->data;
        $data_app->tipo_fluxo = $data->tipo_fluxo;
        $data_app->valor = $data->valor;

        print_r(json_encode($context_obj->save($data_app, false)));
        // if () {
        //     print_r(json_encode($data_app));
        // }
    }

    public function one($context, $context_obj)
    {
        error_reporting(0);
        $context->autoRender = false;
        $id = (int) $context->request->getBody()->getContents();
        echo json_encode($context_obj->get($id));
    }
}
