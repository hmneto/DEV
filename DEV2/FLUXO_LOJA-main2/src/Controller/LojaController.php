<?php
namespace App\Controller;

use App\Controller\AppController;

class LojaController extends AppController
{
    public function receve()
    {
        $myclass = new MyClass();
        $myclass->receve($this, $this->Loja);
    }


    public function send()
    {
        $myclass = new MyClass();
        $myclass->send($this, $this->Loja);
    }

    public function edit()
    {
        $myclass = new MyClass();
        $myclass->edit($this,$this->Loja);
    }
  

    public function one()
    {
        $myclass = new MyClass();
        $myclass->one($this,$this->Loja);
    }
}
