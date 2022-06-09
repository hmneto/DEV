
CREATE DATABASE dbMinhaLoja;
USE dbMinhaLoja;
CREATE TABLE tb_Produtos (
	cdProduto INT PRIMARY KEY IDENTITY(1,1),
	nmProduto VARCHAR(50) NOT NULL, -- Obrigatório
	vlProduto DECIMAL(6,2) NOT NULL
);

CREATE TABLE tb_Clientes (
	cdCliente INT PRIMARY KEY IDENTITY(1,1),
	nmCliente VARCHAR(50) NOT NULL,
	dtNascimento DATE,
	inSexo VARCHAR(1) NOT NULL,
	nmEndereco VARCHAR(50),
	nmCidade VARCHAR(50),
	nmEstado VARCHAR(30),
	nmTelefone1 VARCHAR(15),
	nmTelefone2 VARCHAR(15)
)

CREATE TABLE tb_Vendas (
	cdVenda INT PRIMARY KEY IDENTITY(1,1),
	cdCliente INT NOT NULL FOREIGN KEY REFERENCES tb_Clientes (cdCliente),
	dtVenda DATETIME NOT NULL
);

CREATE TABLE tb_ProdutoVenda (
	cdProdutoVenda INT PRIMARY KEY IDENTITY(1,1),
	cdVenda INT FOREIGN KEY REFERENCES tb_Vendas (cdVenda) NOT NULL,
	cdProduto INT FOREIGN KEY REFERENCES tb_Produtos (cdProduto) NOT NULL,
	qtProduto INT NOT NULL
)

ALTER TABLE tb_Vendas
ADD CONSTRAINT FK_Produto_Vendas
FOREIGN KEY (cdCliente)
REFERENCES tb_Produtos (cdProduto)


INSERT INTO tb_Produtos VALUES ('Suco de laranja ', 4.5);

SELECT cdProduto, nmProduto, vlProduto from tb_Produtos

INSERT INTO tb_Clientes VALUES ('Paulo Guina', '1980-05-01' ,'m','Rua da Mecânica, 400','campinas','São Paulo','11 1234-6789','11 8525-7469')

INSERT INTO tb_Vendas VALUES (1,GETDATE());

INSERT INTO tb_ProdutoVenda VALUES (1,1,3);

SELECT * from tb_ProdutoVenda

SELECT * from tb_Produtos

SELECT * FROM tb_Produtos p inner JOIN tb_ProdutoVenda pv
ON p.cdProduto = pv.cdProduto;
			      			      
DECLARE @teste int
INSERT INTO tb_Produtos VALUES ('Suco de Limão ', 2.5)
SET @teste = (SELECT SCOPE_IDENTITY())

INSERT INTO tb_Clientes VALUES ('Pedro', '1990-04-24' ,'m','Rua da Mecânica, 400','Sabará','Minas Gerais','11 1234-6789','11 8525-7469');
INSERT INTO tb_Clientes VALUES ('José Penha', '1977-05-07', 'M', 'Rua da Mecânica, 33', 'Campinas', 'São Paulo', '11 1233-4434', '11 99283-9099');
INSERT INTO tb_Clientes VALUES ('Zequinha Muriçoca', '1988-05-07', 'M', 'Rua Jambira, 13', 'Campinas', 'São Paulo', '11 1584-2214', '');
INSERT INTO tb_Clientes VALUES ('Mariazinha de Lá', '1981-05-07', 'F', 'Rua Jambira, 13', 'Campinas', 'São Paulo', '11 1584-2214', '');
	
	
INSERT INTO tb_Vendas VALUES (2,GETDATE())

INSERT INTO tb_ProdutoVenda (cdVenda,cdProduto,qtProduto) VALUES (3,2,1)
			      
SELECT qtProduto, nmProduto, vlProduto * qtProduto as ValorDoProduto, dtVenda, nmCliente 
FROM tb_ProdutoVenda pv
inner join tb_Produtos p
ON p.cdProduto = pv.cdProduto
inner join tb_Vendas v
ON v.cdVenda = pv.cdVenda
inner join tb_Clientes c
ON c.cdCliente = v.cdCliente;

SELECT SUM(pv.qtProduto), c.nmCliente, SUM(p.vlProduto *qtProduto)
FROM tb_ProdutoVenda pv
inner join tb_Produtos p
ON p.cdProduto = pv.cdProduto
inner join tb_Vendas v
ON v.cdVenda = pv.cdVenda
inner join tb_Clientes c
ON c.cdCliente = v.cdCliente
GROUP BY c.nmCliente;

SELECT SUM(pv.qtProduto), c.nmCliente, SUM(p.vlProduto *qtProduto), p.nmProduto
FROM tb_ProdutoVenda pv
inner join tb_Produtos p
ON p.cdProduto = pv.cdProduto
inner join tb_Vendas v
ON v.cdVenda = pv.cdVenda
inner join tb_Clientes c
ON c.cdCliente = v.cdCliente
GROUP BY c.nmCliente, p.nmProduto;





SELECT v.cdVenda, 
c.nmCliente, 
p.cdProduto, 
p.nmProduto,
pv.qtProduto,
p.vlProduto,
pv.qtProduto * p.vlProduto as qtValorTotalProduto,
TOTAL_VENDAS.qtTotalProdutos, 
TOTAL_VENDAS.qtValorTotalVenda, 
TOTAL_VENDAS.qtTotalProdutos
FROM tb_Produtos p
inner join tb_ProdutoVenda pv ON p.cdProduto = pv.cdProduto
inner join tb_Vendas v ON pv.cdVenda = v.cdVenda
inner join tb_Clientes c ON v.cdCliente = c.cdCliente
INNER JOIN (
	SELECT v.cdVenda, SUM(pv.qtProduto) qtTotalProdutos, SUM(p.vlProduto * pv.qtProduto) as qtValorTotalVenda
	FROM tb_Produtos p
	inner join tb_ProdutoVenda pv ON p.cdProduto = pv.cdProduto
	inner join tb_Vendas v ON pv.cdVenda = v.cdVenda
	GROUP BY v.cdVenda
) TOTAL_VENDAS ON v.cdVenda = TOTAL_VENDAS.cdVenda;




--DROP PROCEDURE dbo.sp_TotalVendasProdutosCliente


CREATE PROCEDURE sp_TotalVendasProdutosCliente(
   @cdCliente int
)

AS

SELECT v.cdVenda, 
c.nmCliente, 
p.cdProduto, 
p.nmProduto,
pv.qtProduto,
p.vlProduto,
pv.qtProduto * p.vlProduto as qtValorTotalProduto,
TOTAL_VENDAS.qtTotalProdutos, 
TOTAL_VENDAS.qtValorTotalVenda, 
TOTAL_VENDAS.qtTotalProdutos
FROM tb_Produtos p
inner join tb_ProdutoVenda pv ON p.cdProduto = pv.cdProduto
inner join tb_Vendas v ON pv.cdVenda = v.cdVenda
inner join tb_Clientes c ON v.cdCliente = c.cdCliente
INNER JOIN (
	SELECT v.cdVenda, SUM(pv.qtProduto) qtTotalProdutos, SUM(p.vlProduto * pv.qtProduto) as qtValorTotalVenda
	FROM tb_Produtos p
	inner join tb_ProdutoVenda pv ON p.cdProduto = pv.cdProduto
	inner join tb_Vendas v ON pv.cdVenda = v.cdVenda
	GROUP BY v.cdVenda
) TOTAL_VENDAS ON v.cdVenda = TOTAL_VENDAS.cdVenda
WHERE v.cdCliente = @cdCliente;


SELECT *
INTO tb_ClientesBackup
FROM tb_Clientes;

/*
CREATE OR ALTER TABLE tb_Enderecos (
	cdEndereco INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmEndereco VARCHAR(50) NOT NULL,
	nmCEP VARCHAR(9) 
)

CREATE OR ALTER TABLE tb_Cidades (
	cdCidade INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmCidade VARCHAR(50) NOT NULL
)

CREATE OR ALTER TABLE tb_Estados (
	cdEstado INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmEstado VARCHAR(30) NOT NULL,
	nmSigla VARCHAR(2) NOT NULL
)
*/

CREATE TABLE tb_Enderecos (
	cdEndereco INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmEndereco VARCHAR(50) NOT NULL,
	nmCEP VARCHAR(9),
	cdCidade INT NOT NULL
)

CREATE TABLE tb_Cidades (
	cdCidade INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmCidade VARCHAR(50) NOT NULL,
	cdEstado INT NOT NULL
)

CREATE TABLE tb_Estados (
	cdEstado INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	nmEstado VARCHAR(30) NOT NULL,
	nmSigla VARCHAR(2) NULL
)

ALTER TABLE tb_Enderecos
ADD CONSTRAINT FK_Enderecos_Cidades
FOREIGN KEY (cdCidade)
REFERENCES tb_Cidades (cdCidade);

ALTER TABLE tb_Cidades
ADD CONSTRAINT FK_Cidades_Estados
FOREIGN KEY (cdEstado)
REFERENCES tb_Estados (cdEstado);

/*
  
CREATE TABLE #tmp_Estados (
	nmEstado VARCHAR(30),
	nmSigla VARCHAR(2) NULL
);

-- Inserir os dados dos estados na tabela temporária
INSERT INTO #tmp_Estados (nmEstado)
SELECT DISTINCT nmEstado FROM tb_Clientes;

-- Update na Sigla
UPDATE #tmp_Estados SET nmSigla = 'SP' WHERE nmEstado = 'São Paulo';

SELECT * FROM #tmp_Estados



DROP TABLE #tmp_Estados;
*/


-- Iniciar a transação
BEGIN TRAN;

CREATE TABLE #tmp_Estados (
	cdEstado INT IDENTITY(1,1),
	nmEstado VARCHAR(30),
	nmSigla VARCHAR(2) NULL
);

-- Inserir os dados dos estados na tabela temporária
INSERT INTO #tmp_Estados (nmEstado)
SELECT DISTINCT nmEstado FROM tb_Clientes ORDER BY nmEstado;

-- Tratamento dos dados

-- Update na Sigla
UPDATE #tmp_Estados SET nmSigla = 'SP' WHERE nmEstado = 'São Paulo';

SET IDENTITY_INSERT tb_Estados ON; -- Insere na coluna de identity

-- Inserindo na tabela de Estado
INSERT INTO tb_Estados (cdEstado, nmEstado, nmSigla)
SELECT cdEstado, nmEstado, nmSigla FROM #tmp_Estados;

-- SELECT * FROM #tmp_Estados
-- SELECT * FROM tb_Estados;

DROP TABLE #tmp_Estados;

SET IDENTITY_INSERT tb_Estados OFF;


ROLLBACK TRAN;
-- COMMIT TRAN;

-- Exemplo 2: Inteiro aleatórios (sempre positivo)
select abs(checksum(newid()) %3) as int_aleatorio_positivo
