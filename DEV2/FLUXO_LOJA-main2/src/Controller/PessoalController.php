<?php
namespace App\Controller;

use App\Controller\AppController;

class PessoalController extends AppController
{
    public function receve()
    {
        $myclass = new MyClass();
        $myclass->receve($this,$this->Pessoal);
    }


    public function send()
    {
        $myclass = new MyClass();
        $myclass->send($this,$this->Pessoal);
    }

    public function edit()
    {
        $myclass = new MyClass();
        $myclass->edit($this,$this->Pessoal);
    }
  

    public function one()
    {
        $myclass = new MyClass();
        $myclass->one($this,$this->Pessoal);
    }
}
