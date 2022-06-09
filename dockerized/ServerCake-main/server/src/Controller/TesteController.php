<?php
/**
 * 
 *
 * @property \App\Model\Table\Table1Table $Table1
 * @method \App\Model\Entity\Table1[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */

namespace App\Controller;

use App\Controller\AppController;

class TesteController extends AppController
{
    public $helpers = array('Html', 'Form');
    public $name = 'Table1';
    public function index()
    {
        
        $this->autoRender = false;
        error_reporting(0);
        
         //$ok = json_encode($this->Table1->find('All')
        //->first());
        print_r($this->set('Table1', $this->Table1->find('all')));
    }


    public function listar(){
        $this->autoRender = false;
        error_reporting(0);
        print_r("listar");

    }
}
