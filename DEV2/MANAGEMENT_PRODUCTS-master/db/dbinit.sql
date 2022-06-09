-- --------------------------------------------------------
-- Servidor:                     192.168.99.100
-- Versão do servidor:           8.0.20 - MySQL Community Server - GPL
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela management.estoque
CREATE TABLE IF NOT EXISTS `estoque` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_da_peca` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `preco` float(6,2) NOT NULL,
  `porcentagem` float(5,2) NOT NULL,
  `tamanho` varchar(6) NOT NULL,
  `editado` datetime DEFAULT NULL,
  `criado` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela management.estoque: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estoque` DISABLE KEYS */;
/*!40000 ALTER TABLE `estoque` ENABLE KEYS */;

-- Copiando estrutura para tabela management.imagens
CREATE TABLE IF NOT EXISTS `imagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_peca` int DEFAULT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `tamanho` varchar(20) DEFAULT NULL,
  `chave` varchar(150) DEFAULT NULL,
  `url` varchar(150) DEFAULT NULL,
  `criado` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela management.imagens: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;

-- Copiando estrutura para tabela management.venda
CREATE TABLE IF NOT EXISTS `venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_da_peca` varchar(100) NOT NULL,
  `quantidade` int NOT NULL,
  `preco` float(6,2) NOT NULL,
  `criado` datetime NOT NULL,
  `editado` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela management.venda: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
