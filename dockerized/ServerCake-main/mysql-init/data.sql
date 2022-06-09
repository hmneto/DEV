-- Adminer 4.8.1 MySQL 8.0.26 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `table1`;
CREATE TABLE `table1` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `pertence` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pertence` (`pertence`),
  CONSTRAINT `table1_ibfk_1` FOREIGN KEY (`pertence`) REFERENCES `table2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `table1` (`id`, `nome`, `pertence`) VALUES
(1,	'primeiro',	1),
(3,	'segundo',	2);

DROP TABLE IF EXISTS `table2`;
CREATE TABLE `table2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grupo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `table2` (`id`, `grupo`) VALUES
(1,	'empresa'),
(2,	'igreja');

-- 2021-08-24 14:33:19
