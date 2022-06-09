<?php
namespace App\Controller;
use PDO;
class Conexao
{
    private $instancia;
    private $servername;
    private $username;
    private $password;
    private $database;

    function __construct()
    {
        $this->instancia = null;
        $this->servername = getenv('dbserver');
        $this->username = getenv('dbuser');
        $this->password =  getenv("dbpass");
        $this->database = getenv('dbbase');

        if (!isset($this->instancia)) {
            try {
                $dsn = 'mysql:host=' . $this->servername . ';dbname=' . $this->database;
                $pdo = new PDO($dsn, $this->username, $this->password);
                $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                $this->instancia = $pdo;
            } catch (Exception $e) {
                $this->instancia = false;
                echo $e->getMessage();
            }
        }
    }

    public function getInstancia()
    {
        return $this->instancia;
    }
} 