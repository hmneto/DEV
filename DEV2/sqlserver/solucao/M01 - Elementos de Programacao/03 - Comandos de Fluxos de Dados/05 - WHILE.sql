/*
While (Falta terminar)

Executa um bloco de comandos diversas vezes.

- Precisa de uma expressão lógica para repetir o bloco de comandos.


While <Expressão Lógica>
   <Bloco de Comandos>

*/

Declare @nContaLivro int = 1

While @nContaLivro  <= 3 Begin 
      Select * From tCADLivro where iIDLivro = @nContaLivro
	  set @nContalivro += 1
end 



---
/*

*/

Declare @dInicio date = '2018-12-01'
Declare @dFinal date = '2018-12-31'

While @dInicio <= @dFinal begin

      Print @dInicio
	  Print 'Calculo de consumo de ' + datename(dw,@dInicio)

	  set @dInicio = dateadd(d,1,@dInicio)
end 



use eBook
go

Begin 

   Declare @nQtdLivros tinyint  = 0

   update tRELEstoque 
      set dUltimoConsumo = '1900-01-01' 
    where iidlivro = 108 
   --- Retorno 8 linhas!!!

   Set @nQtdLivros = @@ROWCOUNT

   While @nQtdLivros > 0  Begin

         update top(1) tRELEstoque -- Retorna 1 linha, para WHERE Verdadeiro 
		    set dUltimoConsumo = getdate()
          where iidlivro = 108 
	        and dUltimoConsumo = '1900-01-01'
			
         set @nQtdLivros -= 1

		 print @nQtdLivros
  
   End
		
End
/*
Fim do script 
*/


/*
Deletando um grande quantidade de linhas !!!
*/


-- Simular 

drop table tTMPPedidoItem

Select * into tTMPPedidoItem
  From tMOVPedidoItem

--- Solução !!1
Delete from tTMPPedidoItem where iIDPedidoItem <= 1000000

/*
Problemas. 
- Voce teria uma transação aberta e talvez bloqueando a tabela inteira
- Isso causaria uma sequencia de bloqueios em outras conexões.
- O seu Log de Transação ficaria grande... 
*/

-- Solução. Faça DELETE menores. 


select count(1)  from tTMPPedidoItem where iIDPedidoItem <= 1000000


/*
--------------
*/

Declare @nDeletando bit = 1

while @nDeletando = 1 Begin 

      Raiserror('Deletando....', 10,1) with nowait 

      Delete top (49000) 
	    From tTMPPedidoItem 
	   where iIDPedidoItem <= 1000000

	   if @@ROWCOUNT < 49000 
	      Set @nDeletando = 0

end 