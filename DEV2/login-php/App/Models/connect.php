<?php

class Connect
{
    var $localhost = "db";
    var $root = "xxxx";
    var $password = "xxxx";
    var $database = "controlestoque";
    var $SQL;


    public function __construct()
    {
        $this->SQL = mysqli_connect($this->localhost,$this->root,$this->password);
        mysqli_select_db($this->SQL,$this->database);
        if(!$this->SQL){
            die("conexão com o banco de dados falhou!: ". mysqli_connect_error($this->SQL));
        }
    }

    public function login($username,$password)
    {
		
        $this->query = "SELECT * FROM usuario WHERE Username = '$username'";
        $this->result = mysqli_query($this->SQL, $this->query) or die(mysqli_error($this->SQL));

        $this->total = mysqli_num_rows($this->result);



        if($this->total){
            $this->dados = mysqli_fetch_array($this->result);
            if(!strcmp($password, $this->dados['Password'])){
                $_SESSION['idUsuario'] = $this->dados['IdUser'];
                $_SESSION['usuario'] = $this->dados['Username'];
                $_SESSION['perm'] = $this->dados['Permissao'];
                $_SESSION['foto'] = $this->dados['Imagem'];
                header("Location: ./../logado.php");
            }else{
                header("Location: ../login.php?alert=2");
            }
        }else{
            header("Location: ../login.php?alert=1");
        }
    }

}


$connect = new Connect;