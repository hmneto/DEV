/*
Bloco TRY e CATCH 

Controla as exceções e tratamento de erros.

O bloco TRY controlas as exceções, detectando os erros gerados por comandos
ou pela instrução raiserror() e envia para bloco CATCH.

O bloco CACTH recebe do bloco TRY o erro, identifica os valores retornados 
usando funções de tratamento de erro exclusivas desse bloco. Neste bloco
você tem a opção de devolver o erro para que fez a chamado ou tratar o erro para 
gerar um log em tabela ou no SQL Server Logs. Em um programação mais
elaborada, você pode identificar o erro e executar novamente o bloco Try. 

---------------------------------------------------------


<Blocos de comandos> 

Begin Try


   <Blocos de Comandos que podem apresentar exceções>


End Try


Begin Catch


   <Bloco de tratamento de erros>


End Catch 

<Blocos de comandos> 



- Blocos TRY e CATCH deve ficar juntos.
- Não pode existir comandos entre os blocos.
- Somente erros com severidade acima de 10 são detectados.
- Se não houver erro no bloco TRY, o fluxo é desviado para a próximo instrução
  abaixo do End Catch
- Voce pode decidir continuar a execução ou interromper no tratamento do erro 
*/

/*
Exemplo com erro de divisão por zero 
*/

Begin

   raiserror('Teste de simulação de erro',10,1) with nowait 

   Begin Try

      raiserror('Inicio Teste de simulação de erro',10,1) with nowait 
	  select 1/0 
	  raiserror('Final Teste de simulação de erro',10,1) with nowait 

   End Try

   Begin Catch
       raiserror('Identificação do erro.',10,1) with nowait 
   End Catch 

   raiserror('Teste de simulação de erro',10,1) with nowait 

End 


/*

*/

declare @dData datetime = '2018-11-15'
declare @nResultado int 

while @dData <= getdate() begin

   Begin Try

      if datepart(dw,@dData) in (1,7)
	     Set @nResultado = 1/0 
	  raiserror('Lançamentos de contabilizado',10,1)  

   End Try 

   Begin Catch

      print '--- Houve um erro no dia ' 
	  print datename(dw, @dData) 

   End Catch 

   set @dData = dateadd(d,1,@dData)

End 

/*
*/

Begin  try
   select * from TabelaNaoExiste
end Try

begin catch
    select 'Houve um erro'
end catch 