/*
Restore do banco de dados eBook.

1. Identificar a pasta onde está o arquivo de backup eBOOK.BKP
   Vou assumir, que o arquivo está em E:\BACKUP

2. Verificar se existe as pastas E:\DADOS e E:\LOG. Se não existir, crie.
   Não tem drive E:, utilize os que você tem disponível.

3. Será necessário pelo menos 5Gb de espaço livre. 

*/

use master
go


/*
Verificar se o banco de dados já existe. 
Se sim, coloca o banco em modelo de Single_user (Somente uma conta pode se logar) e
reverte todas as transações que estavam em aberto. 
*/

if db_id('eBook') is not null
   alter database eBook set single_user with rollback immediate 
go

/*
Inicia o processo de restore 
*/
Restore Database eBook 
From disk = 'D:\sqlserver\backup\eBook.bkp' 
With 
move 'System'      to 'D:\sqlserver\dados\eBook_System01.mdf',
move 'Data01'      to 'D:\sqlserver\dados\eBook_Data01.ndf',
move 'Index01'     to 'D:\sqlserver\dados\eBook_Index01.ndf',
move 'Analitico01' to 'D:\sqlserver\dados\eBook_Analitico01.ndf',
move 'Blob01'      to 'D:\sqlserver\dados\eBook_Blob01.ndf',
move 'Log01'       to 'D:\sqlserver\log\eBook_LOG01.ldf',
Replace , 
Recovery, 
Stats = 1 
GO

/*
Restore concluído.
*/

use eBook
go

Select count(*) 
  From tCADCliente

/*
Apresentar o banco de pelo Diagrama 
*/
