use ebook
go

update tCADLoja set cDescricao = Upper(SUBSTRING(cDescricao,1,1))+SUBSTRING(cDescricao,2,50)

alter table tRELEStoque add dUltimoConsumo date 
go

alter table tRELEStoque drop column dUtimoConsumo 
go
alter table tRELEStoque add nQuantidadeMinima int not null default 0 


Create or Alter Procedure stp_AtulizaNotaFiscal
as 
Begin

   Begin Transaction 

   /*
   Rotina de atualização de Estoque 
   */

   Rollback 

   Return 100
   
End 
go

Create or Alter Procedure stp_AtulizaCreditoCliente 
as 
Begin

   Begin Transaction 

   /*
   Rotina de atualização de Estoque 
   */

   ---Commit 

   Return 100
   
End 
go


Alter table tCADLivro add nMesesConsumo int 
go

Create Sequence seqiIDSolicitacao as int start with 1 increment by 1 
go
drop Table tMOVSolicitacaoCompra 
go

Create Table tMOVSolicitacaoCompra (
iidSolicitacao int not null default (next value for seqiIDSolicitacao),
dSolicitacao date not null default getdate(),
iIDLivro int not null , 
nQuantidade int not null check( nQuantidade > 0), 
mValorEstimado smallmoney not null check( mValorEstimado > 0),
mPesoEstimado numeric(13,1) not null, 
Constraint PKSolicitacao Primary Key (iidSolicitacao),
Constraint FKLivro Foreign Key (iIDLivro) references tCADLivro(iidLivro)
)
go
update tCADLivro set nMesesConsumo = 12
go

Create Table tTMPLivro (iidLivro int not null)
go

Alter table tRELEstoque add constraint CHKQuantidade check (nQuantidade > 0)


with cteExc as (
   select top 80 percent * from tCADcliente order by newid() 
)

update cteExc set dExclusao = null 
