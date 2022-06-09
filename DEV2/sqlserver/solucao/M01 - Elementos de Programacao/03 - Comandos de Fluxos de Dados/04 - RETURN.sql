/*  
Return 

Finaliza a execução de um conjunto de instruções em lote ou de uma
stored procedure.

*/

Begin

   Select max(iidcliente) from tMOVPedido

   return 

   Select top 1 * from tCADLivro 

End 


/*
Inicio do script 
*/
set nocount on 

Begin
   
   If (select iidcliente from tCADcliente where iidcliente = 342353241)  > 0
      Begin 
         update tCADCliente 
            set dExclusao = getdate() 
          where iidcliente = 1
         raiserror('Cliente foi cancelado.',10,1)
      End 
   Else
      Begin 
         raiserror('Cliente não cadastrado.',10,1)
		 Return 
	  End
	   
   Raiserror('Script processado  com sucesso.',10,1)

End 
/*
Fim do script 
*/