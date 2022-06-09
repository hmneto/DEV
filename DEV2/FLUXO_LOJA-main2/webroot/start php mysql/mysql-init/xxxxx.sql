-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `fluxo`;
CREATE TABLE `fluxo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_fluxo` char(250) DEFAULT NULL,
  `id_dono` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fluxo_usuarios` (`id_dono`),
  CONSTRAINT `FK_fluxo_usuarios` FOREIGN KEY (`id_dono`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `registros`;
CREATE TABLE `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_entrada` varchar(150) NOT NULL,
  `valor` float(6,2) NOT NULL,
  `data` date NOT NULL,
  `tipo_fluxo` enum('E','S') NOT NULL,
  `fluxo_id` int NOT NULL,
  `id_dono` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_registros_fluxo` (`fluxo_id`),
  KEY `FK_registros_usuarios` (`id_dono`),
  CONSTRAINT `FK_registros_fluxo` FOREIGN KEY (`fluxo_id`) REFERENCES `fluxo` (`id`),
  CONSTRAINT `FK_registros_usuarios` FOREIGN KEY (`id_dono`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2020-06-19 15:04:42
