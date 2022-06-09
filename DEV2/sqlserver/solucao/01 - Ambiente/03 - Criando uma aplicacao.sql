/*
*/
use master
go

Create Login usrAppDemo 
  With Password = '@123456', 
  Default_Database = eBook, 
  Check_Expiration = off,     -- Conta não expira
  Check_Policy = off          -- Não aplicar as políticas de senha do Windows 
go

use eBook
go

Create User usrAppDemo 
   For Login usrAppDemo 
   With Default_Schema = dbo
go

Alter Role db_owner add member usrAppDemo
go

Create Or Alter Procedure stp_ClienteConsulta
@cNome varchar(100) 
as
Begin

   Select cNome, cDocumento , dAniversario 
     From tCADCliente 
    Where cNome like '%'+@cNome+'%'

End 
go


