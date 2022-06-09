/*
Bloco TRY e CATCH 

Controla as exce��es e tratamento de erros.

O bloco TRY controlas as exce��es, detectando os erros gerados por comandos
ou pela instru��o raiserror() e envia para bloco CATCH.

O bloco CACTH recebe do bloco TRY o erro, identifica os valores retornados 
usando fun��es de tratamento de erro exclusivas desse bloco. Neste bloco
voc� tem a op��o de devolver o erro para que fez a chamado ou tratar o erro para 
gerar um log em tabela ou no SQL Server Logs. Em um programa��o mais
elaborada, voc� pode identificar o erro e executar novamente o bloco Try. 

---------------------------------------------------------


<Blocos de comandos> 

Begin Try


   <Blocos de Comandos que podem apresentar exce��es>


End Try


Begin Catch


   <Bloco de tratamento de erros>


End Catch 

<Blocos de comandos> 



- Blocos TRY e CATCH deve ficar juntos.
- N�o pode existir comandos entre os blocos.
- Somente erros com severidade acima de 10 s�o detectados.
- Se n�o houver erro no bloco TRY, o fluxo � desviado para a pr�ximo instru��o
  abaixo do End Catch
- Voce pode decidir continuar a execu��o ou interromper no tratamento do erro 
*/

/*
Exemplo com erro de divis�o por zero 
*/

Begin

   raiserror('Teste de simula��o de erro',10,1) with nowait 

   Begin Try

      raiserror('Inicio Teste de simula��o de erro',10,1) with nowait 
	  select 1/0 
	  raiserror('Final Teste de simula��o de erro',10,1) with nowait 

   End Try

   Begin Catch
       raiserror('Identifica��o do erro.',10,1) with nowait 
   End Catch 

   raiserror('Teste de simula��o de erro',10,1) with nowait 

End 


/*

*/

declare @dData datetime = '2018-11-15'
declare @nResultado int 

while @dData <= getdate() begin

   Begin Try

      if datepart(dw,@dData) in (1,7)
	     Set @nResultado = 1/0 
	  raiserror('Lan�amentos de contabilizado',10,1)  

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