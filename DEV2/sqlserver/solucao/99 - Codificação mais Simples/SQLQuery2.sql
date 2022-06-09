Create or Alter Procedure stp_SolicitaCompraLivro
@iidLoja int  
as
/*
Fazendo o cálculo para vários livros.
*/

Begin

   Set nocount on 
    
	/*
	Procedimento para calcular o consumo médio
	de um livro nos último 6 meses, calcular a previsão
	de consumo para os próximos 12 meses e 
	gerar uma solicitacao de compras de livro. 
	*/
	
   Declare @iidSolicitacao int          -- Identificação da solicitação de compras
	Declare @iIDLivro int				    -- Identificação do Livro
	Declare @nPeso numeric(13,1)		    -- Peso atual do Livro 
	Declare @nQtdMesesConsumo int		    -- Quantos meses previsto de consumo
	Declare @nQtdEstoque int			    -- Quantidade de livro no estoque
	Declare @nQtdMediaConsumida int		 -- Quantidade média consumida de livros
	Declare @nQtdSolicitada int			 -- Quantidade que será solicitada para compra
	Declare @mValorEstimado smallmoney   -- Valor estimado da solicitação de compra. 
   Declare @mPesoEstimado numeric(13,1) -- Peso estimado dos livros.

	Declare @dReferencia datetime        -- Data de Referência para o consumo. 

	Set @iIDLivro = 8513 -- Identifica o livro que será utilizado para o cálculo 
	Set @dReferencia = '2018-09-15'
   
   -- Tabela para dados temporários do livro. (iIDLivro int )
   Truncate table tTMPLivro
   
   with cteDadosLivros as (

      Select * 
        From tCADLivro as Livro
        Join tRELEstoque as Estoque
          on Livro.iIDLivro = Estoque.iIDLivro 

   )

   select * from tCADLivro
   select * from tRELEstoque




   Insert into tTMPLivro
   Select Livro.iidlivro,
          Livro.nPeso ,
          Livro.nMesesConsumo 
     From tCADLivro as Livro 
     Join tRELEstoque as Estoque
       on Livro.iIDLivro = Estoque.iIDLivro
     Where Estoque.nQuantidadeMinima > Estoque.nQuantidade
   
   If @@ROWCOUNT = 0 Begin
	   Raiserror('Não existem livros para serem processados.',10,1)
      Return 
	End

   While (Select top 1 iIDLivro from tTMPLivro) > 0 Begin 

         Set @iIDLivro = (Select top 1 iIDLivro from tTMPLivro)

	      /*
	      Recupera o Peso atual do livro e a 
	      quantidade de meses prevista para consumo 
	      */
	      Select @nPeso = nPeso , 
		          @nQtdMesesConsumo = nMesesConsumo  
	        From tCADLivro 
	       Where iIDLivro = @iIDLivro

         /*
	      Calcula o estoque atual do livro
	      e o valor médio para estimativa da compra. 
	      */
	      Select @nQtdEstoque =  SUM(nQuantidade),
		          @mValorEstimado = AVG(mValor) 
	         From tRELEstoque 
	         Where iIDLivro = @iIDLivro

	      /*
	      Calcula a quantidade média consumida 
	      nos últimos seis meses. 
	      */
	      Select @nQtdMediaConsumida = AVG(nQuantidade)
	         From tMOVPedido as Pedido 
	         Join tMOVPedidoItem as Item
		         on Pedido.iIDPedido = Item.iIDPedido
	         Where Item.IDLivro = @iIDLivro
	         and dPedido <= dateadd(month,-6,@dReferencia /*getdate()*/ )

	      -- Calcula a quantidade que deve ser solicitada.
	      Set @nQtdSolicitada = (@nQtdMediaConsumida * @nQtdMesesConsumo ) - @nQtdEstoque

         If @nQtdSolicitada > 0 Begin
         
	         -- Calcula o valor estimado da quantidade solicitada.
	         Set @mValorEstimado = @mValorEstimado * @nQtdSolicitada

            -- Calcula o peso estimado
            Set @mPesoEstimado = @nQtdSolicitada * @nPeso

	         -- Inclui a solicitação de compras.
          
            Set @iidSolicitacao = next value for seqiIDSolicitacao

            Begin Try 

	            insert into tMOVSolicitacaoCompra
	            (iidSolicitacao,iIDLivro, nQuantidade , mValorEstimado, mPesoEstimado)
	            Values 
	            (@iidSolicitacao,@iIDLivro,@nQtdSolicitada , @mValorEstimado, @mPesoEstimado)

            End Try 

            Begin Catch

               Raiserror('Houve um erro na inclusão da Solicitação de Compras',10,1)

            End Catch 
   
         End -- If @nQtdSolicitada >= 0 

         Delete tTMPLivro where iidlivro = @iIDLivro 
    
   End  -- While    

End 
/*
Fim do cálculo de Consumo Médio 
*/

Select * from tMOVSolicitacaoCompra





Create or Alter Procedure stp_SolicitaCompraLivro
@iidLoja int  
as
/*
Fazendo o cálculo para vários livros.
*/

Begin

   Set nocount on 

   Declare @nRetorno int = 0 
   Declare @dReferencia datetime = '2018-09-15'
   
   Begin Try 

      /*
      Identificar os livro que serão solicitados.
      Verificar se o estoque atual está abaixo do Minimo 
      */

      With 
      CteConsumoMedio as 
      (
         Select Item.IDLivro , AVG(nQuantidade) as nQtdMediaConsumida
	        From tMOVPedido as Pedido 
	        Join tMOVPedidoItem as Item
		       On Pedido.iIDPedido = Item.iIDPedido
	       Where Pedido.iIDLoja = @iidLoja
	         And dPedido <= dateadd(month,-6,@dReferencia /*getdate()*/ )
          Group by Item.IDLivro
      ) , 
      CteLivroSolicitado as 
      (
         Select Livro.iIDLivro  , 
                (nQtdMediaConsumida * nMesesConsumo) - nQuantidade as nQtdSolicitada,
                Estoque.mValor * ((nQtdMediaConsumida * nMesesConsumo) - nQuantidade) as mValorSolicitado,
                Livro.nPeso * ((nQtdMediaConsumida * nMesesConsumo) - nQuantidade) as mPesoSolicitado
           From tRELEstoque as Estoque 
           Join tCADLivro as Livro 
             on Estoque.iIDLivro = Livro.iIDLivro 
           Join cteConsumoMedio as Consumo 
             on Estoque.iIDLivro = Consumo.IDLivro
          Where nQuantidade <= nQuantidadeMinima
            and iIDLoja = @iidLoja 
      )
      Insert Into tMOVSolicitacaoCompra
	   (iidSolicitacao,iIDLivro, nQuantidade , mValorEstimado, mPesoEstimado)
      Select Next Value for seqiIDSolicitacao,
             iIDLivro, 
             nQtdSolicitada,
             mValorSolicitado,
             mPesoSolicitado 
        from CteLivroSolicitado 
        Where nQtdSolicitada > 0 

   End Try  

   Begin Catch 

      Execute @nRetorno = stp_ManipulaErro

   End Catch 

End 
/*
*/
