/*

Begin / End

Agrupa várias instruções em um bloco de comandos. 

BEGIN
   <Comandos>
   <Comandos>
	...
END


Semelhante em C ou Java

int main (void)
{

}


public static void main(String arg[])
{

}

*/


use eBook
go


Begin
   /*
   Iniciando a consulta
   */
   set nocount on 
   Select cTitulo 
     From tCADLivro 
	Where iIDLivro = 3443
   Raiserror('Consulta realizada com sucesso',10,1)
End 
go



/*
Blocos Aninhados 
*/

Begin
   /*
   Iniciando a consulta
   */
   Begin 
      set nocount on 
      Select cTitulo 
  	    From tCADLivro 
	   Where iIDLivro = 3443
      Raiserror('Consulta realizada com sucesso',10,1)
   End 
   /*
   Confirma o pedido 
   */
   Begin 
      Update tMOVPedido 
	     Set dCancelado = getdate() 
	   Where iidpedido = 182965
      raiserror('Pedido cancelado', 10,1) 
   End 
End 
go



/*
------------------------------------
*/

/*
Iniciando a consulta
*/
set nocount on 
Select cTitulo 
  From tCADLivro 
 Where iIDLivro = 3443
Raiserror('Consulta realizada com sucesso',10,1)
/*
Confirma o pedido 
*/
Update tMOVPedido 
   Set dCancelado = getdate() 
 Where iidpedido = 182965
raiserror('Pedido cancelado', 10,1) 


/*
*/
