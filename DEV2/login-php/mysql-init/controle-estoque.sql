-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.40-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para controlestoque
DROP DATABASE IF EXISTS `controlestoque`;
CREATE DATABASE IF NOT EXISTS `controlestoque` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `controlestoque`;

-- Copiando estrutura para tabela controlestoque.fabricante
DROP TABLE IF EXISTS `fabricante`;
CREATE TABLE IF NOT EXISTS `fabricante` (
  `IdFabricante` int(11) NOT NULL AUTO_INCREMENT,
  `NomeFabricante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CNPJFabricante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `EmailFabricante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `EnderecoFabricante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TelefoneFabricante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Usuario_IdUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdFabricante`),
  KEY `FK_fabricante_usuario` (`Usuario_IdUser`),
  CONSTRAINT `FK_fabricante_usuario` FOREIGN KEY (`Usuario_IdUser`) REFERENCES `usuario` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela controlestoque.fabricante: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `fabricante` DISABLE KEYS */;
/*!40000 ALTER TABLE `fabricante` ENABLE KEYS */;

-- Copiando estrutura para tabela controlestoque.itens
DROP TABLE IF EXISTS `itens`;
CREATE TABLE IF NOT EXISTS `itens` (
  `IdItens` int(11) NOT NULL AUTO_INCREMENT,
  `QuantItens` int(11) NOT NULL DEFAULT '0',
  `QuantItensVend` int(11) NOT NULL DEFAULT '0',
  `ValCompItens` int(11) NOT NULL DEFAULT '0',
  `ValVendItens` int(11) NOT NULL DEFAULT '0',
  `DataCompraItens` date NOT NULL,
  `DataVenci_Itens` date NOT NULL,
  `Ativo` int(11) NOT NULL DEFAULT '0',
  `Produto_CodRefProduto` int(11) NOT NULL DEFAULT '0',
  `Fabricante_IdFabricante` int(11) NOT NULL DEFAULT '0',
  `Usuario_IdUser` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdItens`),
  KEY `FK_itens_produto` (`Produto_CodRefProduto`),
  KEY `FK_itens_fabricante` (`Fabricante_IdFabricante`),
  KEY `FK_itens_usuario` (`Usuario_IdUser`),
  CONSTRAINT `FK_itens_fabricante` FOREIGN KEY (`Fabricante_IdFabricante`) REFERENCES `fabricante` (`IdFabricante`),
  CONSTRAINT `FK_itens_produto` FOREIGN KEY (`Produto_CodRefProduto`) REFERENCES `produto` (`IdProduto`),
  CONSTRAINT `FK_itens_usuario` FOREIGN KEY (`Usuario_IdUser`) REFERENCES `usuario` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela controlestoque.itens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `itens` DISABLE KEYS */;
/*!40000 ALTER TABLE `itens` ENABLE KEYS */;

-- Copiando estrutura para tabela controlestoque.produto
DROP TABLE IF EXISTS `produto`;
CREATE TABLE IF NOT EXISTS `produto` (
  `IdProduto` int(11) NOT NULL AUTO_INCREMENT,
  `NomeProduto` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `Usuario_IdUser` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdProduto`),
  KEY `FK_produto_usuario` (`Usuario_IdUser`),
  CONSTRAINT `FK_produto_usuario` FOREIGN KEY (`Usuario_IdUser`) REFERENCES `usuario` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela controlestoque.produto: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;

-- Copiando estrutura para tabela controlestoque.representante
DROP TABLE IF EXISTS `representante`;
CREATE TABLE IF NOT EXISTS `representante` (
  ` IdRepresentante` int(11) NOT NULL AUTO_INCREMENT,
  `NomeRepresentante` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TelefoneRepresentante` varchar(16) COLLATE utf8_unicode_ci DEFAULT NULL,
  `EmailRepresentante` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Fabricante_IdFabricante` int(11) DEFAULT NULL,
  `Usuario_IdUser` int(11) DEFAULT NULL,
  PRIMARY KEY (` IdRepresentante`),
  KEY `FK_representante_fabricante` (`Fabricante_IdFabricante`),
  KEY `FK_representante_usuario` (`Usuario_IdUser`),
  CONSTRAINT `FK_representante_fabricante` FOREIGN KEY (`Fabricante_IdFabricante`) REFERENCES `fabricante` (`IdFabricante`),
  CONSTRAINT `FK_representante_usuario` FOREIGN KEY (`Usuario_IdUser`) REFERENCES `usuario` (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela controlestoque.representante: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `representante` DISABLE KEYS */;
/*!40000 ALTER TABLE `representante` ENABLE KEYS */;

-- Copiando estrutura para tabela controlestoque.usuario
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `IdUser` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `Imagem` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `DataRegistro` date NOT NULL,
  `Permissao` int(11) NOT NULL,
  PRIMARY KEY (`IdUser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela controlestoque.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
REPLACE INTO `usuario` (`IdUser`, `Username`, `Email`, `Password`, `Imagem`, `DataRegistro`, `Permissao`) VALUES
	(1, 'Honorio', 'admin@admin.com', '202cb962ac59075b964b07152d234b70', 'dist/img/user2-160x160.jpg', '2019-08-14', 1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
