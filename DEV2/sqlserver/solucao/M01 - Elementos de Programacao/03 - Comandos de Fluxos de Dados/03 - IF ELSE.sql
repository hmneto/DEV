/*
IF / ELSE

Causa um desvio condicional no fluxo de comandos.

- Precisa de uma express�o l�gica para validar o desvio.
- Else � opcional.

IF <Express�o l�gica>
   <Bloco de comandos>
Else 
   <Bloco de comandos>


*/


update tMOVPedido 
   set dCancelado = getdate() 
 where iidPedido = 14543534543

if @@rowcount > 0 
  raiserror('O comando foi processado', 10,1)


/*
Utilizando o Else 
*/

set nocount on 

update tMOVPedido 
   set dCancelado = getdate() 
 where iidPedido = 1

if @@rowcount > 0 
  raiserror('O comando foi processado', 10,1)
else 
  raiserror('O Pedido n�o foi encontrado', 10,1)



/*
Condi��o l�gica 
*/

-- Uma fun��o do SQL Server 
if datepart(dw,getdate()) in (1,7)
   raiserror('Hoje � um final de semana',10,1)
else 
   raiserror('Hoje � um dia de semana',10,1)

-- Dados escalar de uma tabela. 
if (select iidcliente from tCADcliente where iidcliente = 1)  > 0
   raiserror('Cliente j� cadastrado.',10,1)
else
   raiserror('Cliente n�o cadastrado.',10,1)

/*
Agrupando v�rios comandos.

IF e ELSE tem que utilizar BEGIN/END 
*/

if (select iidcliente from tCADcliente where iidcliente = 1)  > 0

   update tCADCliente 
      set dExclusao = getdate() 
    where iidcliente = 1

   raiserror('Cliente foi cancelado.',10,1)

else

   raiserror('Cliente n�o cadastrado.',10,1)

go 

/*
Msg 156, Level 15, State 1, Line 64
Incorrect syntax near the keyword 'else'.

Apesar da mensagem n�o informar a real causa do erro,
o que ocorre � que temos dois comandos depois do IF.


*/

/*
Cancela Nota Fiscal e Pedido 
*/

If (select iidcliente from tCADcliente where iidcliente = 1)  > 0
   Begin
      update tCADCliente 
         set dExclusao = getdate() 
       where iidcliente = 1
      raiserror('Cliente foi cancelado.',10,1)
   End 
Else
   raiserror('Cliente n�o cadastrado.',10,1)
          

/*
A mesma regra vale para o ELSE. Se voce precisa executar dois
ou mais comandos no ELSE, voce tem que utilizar BEGIN/END 
*/




  

