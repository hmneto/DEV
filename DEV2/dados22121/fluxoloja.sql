-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `fluxo`;
CREATE TABLE `fluxo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_fluxo` char(250) DEFAULT NULL,
  `id_dono` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fluxo_usuarios` (`id_dono`),
  CONSTRAINT `FK_fluxo_usuarios` FOREIGN KEY (`id_dono`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `fluxo` (`id`, `nome_fluxo`, `id_dono`) VALUES
(1,	'atelie',	1),
(2,	'loja',	1),
(3,	'pessoal',	1),
(4,	'pessoal',	2),
(5,	'agda',	1),
(6,	'patricia',	1),
(7,	'tele',	1),
(8,	'Lenilza',	1);

DROP TABLE IF EXISTS `registros`;
CREATE TABLE `registros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome_entrada` varchar(150) NOT NULL,
  `valor` float(6,2) NOT NULL,
  `data` date NOT NULL,
  `tipo_fluxo` enum('E','S') NOT NULL,
  `fluxo_id` int(11) NOT NULL,
  `id_dono` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_registros_fluxo` (`fluxo_id`),
  KEY `FK_registros_usuarios` (`id_dono`),
  CONSTRAINT `FK_registros_fluxo` FOREIGN KEY (`fluxo_id`) REFERENCES `fluxo` (`id`),
  CONSTRAINT `FK_registros_usuarios` FOREIGN KEY (`id_dono`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `registros` (`id`, `nome_entrada`, `valor`, `data`, `tipo_fluxo`, `fluxo_id`, `id_dono`) VALUES
(1,	'Mayara',	132.00,	'2019-04-29',	'E',	1,	1),
(2,	'Carol',	200.00,	'2019-04-29',	'E',	1,	1),
(3,	'Mauro ',	150.00,	'2019-05-01',	'E',	1,	1),
(4,	'Keila ',	100.00,	'2019-05-01',	'S',	1,	1),
(5,	'Claudete ',	50.00,	'2019-05-01',	'E',	1,	1),
(6,	'Neide',	15.00,	'2019-05-02',	'E',	1,	1),
(7,	'Keila ',	200.00,	'2019-05-02',	'S',	1,	1),
(8,	'Liliane Karen ',	200.00,	'2019-05-02',	'E',	1,	1),
(9,	'Mariana ',	110.00,	'2019-05-03',	'E',	1,	1),
(10,	'Winnie',	35.00,	'2019-05-03',	'E',	1,	1),
(11,	'Viviane ',	100.00,	'2019-05-03',	'E',	1,	1),
(12,	'Claudete ',	50.00,	'2019-05-03',	'E',	1,	1),
(13,	'Keila ',	215.00,	'2019-05-03',	'S',	1,	1),
(14,	'Rosa ',	30.00,	'2019-05-06',	'E',	1,	1),
(15,	'Gabriela ',	50.00,	'2019-05-07',	'E',	1,	1),
(16,	'Silvana ',	80.00,	'2019-05-07',	'S',	1,	1),
(17,	'Patrícia ',	50.00,	'2019-05-07',	'E',	1,	1),
(18,	'Ventilador ',	60.00,	'2019-05-07',	'S',	1,	1),
(19,	'Vivi',	35.00,	'2019-05-07',	'E',	1,	1),
(20,	'Cristiane ',	50.00,	'2019-05-08',	'E',	1,	1),
(21,	'Carol ',	60.00,	'2019-05-09',	'E',	1,	1),
(22,	'Patrícia ',	10.09,	'2019-05-09',	'E',	1,	1),
(23,	'Cris ',	50.00,	'2019-05-09',	'E',	1,	1),
(24,	'Le ',	100.00,	'2019-05-09',	'S',	1,	1),
(25,	'Dona Cida ',	100.00,	'2019-05-09',	'E',	1,	1),
(26,	'Passagem trem ',	9.00,	'2019-05-11',	'S',	1,	1),
(27,	'Café da manhã SP ',	7.00,	'2019-05-11',	'S',	1,	1),
(28,	'Zíper ',	7.00,	'2019-05-11',	'S',	1,	1),
(29,	'Saia Moana ',	64.00,	'2019-05-11',	'S',	1,	1),
(30,	'Moama ',	280.00,	'2019-05-11',	'E',	1,	1),
(31,	'Dona Cida ',	20.00,	'2019-05-11',	'E',	1,	1),
(32,	'Jessica ',	70.00,	'2019-05-11',	'E',	1,	1),
(33,	'Fátima concerto zíper ',	20.00,	'2019-05-11',	'E',	1,	1),
(34,	'Pâmela ',	40.00,	'2019-05-12',	'E',	1,	1),
(35,	'Angela ',	45.00,	'2019-05-13',	'E',	1,	1),
(36,	'Silvana ',	200.00,	'2019-05-13',	'S',	1,	1),
(37,	'Cassio ',	20.00,	'2019-05-13',	'S',	1,	1),
(38,	'Zélia ',	130.00,	'2019-05-14',	'E',	1,	1),
(39,	'Camila e marilza',	302.00,	'2019-05-14',	'E',	1,	1),
(40,	'Keila ',	213.00,	'2019-05-16',	'S',	1,	1),
(41,	'Rani ',	40.00,	'2019-05-21',	'E',	1,	1),
(42,	'Cartão Itaú ',	243.00,	'2019-05-21',	'S',	1,	1),
(43,	'Cris ',	184.00,	'2019-05-22',	'E',	1,	1),
(44,	'Aluguel ',	150.00,	'2019-05-22',	'S',	1,	1),
(45,	'Aline ',	100.00,	'2019-05-23',	'E',	1,	1),
(46,	'Thifani ',	100.00,	'2019-05-24',	'E',	1,	1),
(47,	'Dona Lurdes ',	50.00,	'2019-05-30',	'E',	1,	1),
(48,	'Lu',	100.00,	'2019-05-30',	'E',	1,	1),
(49,	'Juliana ',	229.00,	'2019-05-31',	'E',	1,	1),
(50,	'Mariana ',	100.00,	'2019-06-02',	'S',	1,	1),
(51,	'Pâmela ',	10.00,	'2019-06-02',	'E',	1,	1),
(52,	'Liliane ',	80.00,	'2019-06-02',	'E',	1,	1),
(53,	'Thais ',	42.00,	'2019-06-03',	'E',	1,	1),
(54,	'Cristiane ',	38.00,	'2019-06-03',	'E',	1,	1),
(55,	'Aluguel ',	230.00,	'2019-06-03',	'S',	1,	1),
(56,	'Aline madrinha ',	53.00,	'2019-06-03',	'E',	1,	1),
(57,	'Claudete ',	120.00,	'2019-06-05',	'E',	1,	1),
(58,	'Letícia ',	80.00,	'2019-06-06',	'E',	1,	1),
(59,	'Keila ',	400.00,	'2019-06-06',	'S',	1,	1),
(60,	'Thifani ',	80.00,	'2019-06-06',	'E',	1,	1),
(61,	'Karen ',	20.00,	'2019-06-06',	'E',	1,	1),
(62,	'Maise ',	80.00,	'2019-06-07',	'E',	1,	1),
(63,	'Rose roupa da dança ',	90.00,	'2019-06-07',	'E',	1,	1),
(64,	'Valéria ',	125.00,	'2019-06-07',	'E',	1,	1),
(65,	'Silvana ',	744.00,	'2019-06-09',	'S',	1,	1),
(66,	'Débora ',	180.00,	'2019-06-10',	'E',	1,	1),
(67,	'Michele ',	100.00,	'2019-06-10',	'E',	1,	1),
(68,	'Mariana ',	252.00,	'2019-06-11',	'E',	1,	1),
(69,	'Saída em dinheiro são Paulo ',	105.00,	'2019-06-14',	'S',	1,	1),
(70,	'Letícia madrinha Karen ',	99.00,	'2019-06-14',	'E',	1,	1),
(71,	'Ingrid ',	20.00,	'2019-06-14',	'E',	1,	1),
(72,	'Cris ',	40.00,	'2019-06-14',	'E',	1,	1),
(73,	'Sil pijama ',	40.00,	'2019-06-17',	'E',	1,	1),
(74,	'Ingrid nora diná ',	55.00,	'2019-06-17',	'E',	1,	1),
(75,	'Camila mãe do Gabriel ',	20.00,	'2019-06-18',	'E',	1,	1),
(76,	'Rosa ',	20.00,	'2019-06-19',	'E',	1,	1),
(77,	'Saída compra SP em dinheiro ',	59.00,	'2019-06-19',	'E',	1,	1),
(78,	'Paty ',	50.00,	'2019-06-20',	'E',	1,	1),
(79,	'Wellington ',	35.00,	'2019-06-21',	'E',	1,	1),
(80,	'Pai do Enzo ',	43.00,	'2019-06-21',	'E',	1,	1),
(81,	'Viviane ',	100.00,	'2019-06-22',	'E',	1,	1),
(82,	'Keila ',	100.00,	'2019-06-25',	'S',	1,	1),
(83,	'Pai do Enzo ',	43.00,	'2019-06-25',	'E',	1,	1),
(84,	'Dirce ',	70.00,	'2019-06-25',	'E',	1,	1),
(85,	'Cleiton, pai da Izabella ',	20.00,	'2019-06-27',	'E',	1,	1),
(86,	'Juliana, Michele ',	25.00,	'2019-06-27',	'E',	1,	1),
(87,	'Lilian ',	50.00,	'2019-06-27',	'E',	1,	1),
(88,	'Wellington ',	100.00,	'2019-06-28',	'E',	1,	1),
(89,	'Keila ',	100.00,	'2019-06-28',	'S',	1,	1),
(90,	'Danielle camisa floral ',	25.00,	'2019-06-28',	'E',	1,	1),
(91,	'Angela ',	380.00,	'2019-07-02',	'E',	1,	1),
(92,	'Rute ',	250.00,	'2019-07-02',	'E',	1,	1),
(93,	'Claudia ',	10.00,	'2019-07-02',	'E',	1,	1),
(94,	'Camila, mãe Gabriel ',	23.00,	'2019-07-02',	'E',	1,	1),
(95,	'Aluguel mês junho ',	380.00,	'2019-07-02',	'S',	1,	1),
(96,	'Wellington ',	40.00,	'2019-07-02',	'E',	1,	1),
(97,	'Camila Carol ',	80.00,	'2019-07-02',	'E',	1,	1),
(98,	'Viviane ',	264.00,	'2019-07-03',	'E',	1,	1),
(99,	'Gilmara ',	80.00,	'2019-07-03',	'E',	1,	1),
(100,	'Eric ',	80.00,	'2019-07-03',	'E',	1,	1),
(101,	'Wellington ',	70.00,	'2019-07-04',	'E',	1,	1),
(102,	'Débora, diná ',	120.00,	'2019-07-05',	'E',	1,	1),
(103,	'Ana ',	95.00,	'2019-07-07',	'E',	1,	1),
(104,	'Rute visinha ',	100.00,	'2019-07-07',	'E',	1,	1),
(105,	'Mariana ',	70.00,	'2019-07-07',	'E',	1,	1),
(106,	'Barbara ',	205.00,	'2019-07-10',	'E',	1,	1),
(107,	'Rute visinha ',	80.00,	'2019-07-10',	'E',	1,	1),
(108,	'Keila ',	354.00,	'2019-07-11',	'S',	1,	1),
(109,	'Nevinha ',	25.00,	'2019-07-11',	'E',	1,	1),
(110,	'Marcia ',	10.00,	'2019-07-11',	'E',	1,	1),
(111,	'Nevinha ',	115.00,	'2019-07-12',	'E',	1,	1),
(112,	'Silvana nora ',	100.00,	'2019-07-12',	'E',	1,	1),
(113,	'Rute restaurante ',	100.00,	'2019-07-12',	'E',	1,	1),
(114,	'Keila ',	200.00,	'2019-07-12',	'S',	1,	1),
(115,	'Barbara ',	154.00,	'2019-07-17',	'E',	1,	1),
(116,	'Cliente vestido azul ',	80.00,	'2019-07-19',	'E',	1,	1),
(117,	'Misley ',	40.00,	'2019-07-19',	'E',	1,	1),
(118,	'Não lembro ',	50.00,	'2019-07-19',	'E',	1,	1),
(119,	'Jennifer ',	105.00,	'2019-07-19',	'E',	1,	1),
(120,	'Sil ',	700.00,	'2019-07-19',	'S',	1,	1),
(121,	'Dirce ',	85.00,	'2019-07-21',	'E',	1,	1),
(122,	'Keila',	100.00,	'2019-07-23',	'S',	1,	1),
(123,	'Wellington',	131.00,	'2019-07-24',	'E',	1,	1),
(124,	'Olga',	100.00,	'2019-07-26',	'E',	1,	1),
(125,	'Banco Itaú',	1200.00,	'2019-07-27',	'S',	1,	1),
(126,	'Fátima ',	50.00,	'2019-07-29',	'E',	1,	1),
(127,	'Neidise',	60.00,	'2019-07-29',	'E',	1,	1),
(128,	'Lucia',	12.00,	'2019-07-29',	'E',	1,	1),
(129,	'Dirce ',	20.00,	'2019-08-01',	'E',	1,	1),
(130,	'Ariane ',	325.00,	'2019-08-01',	'E',	1,	1),
(131,	'Dona Lourdes ',	100.00,	'2019-08-01',	'E',	1,	1),
(132,	'Fernanda ',	20.00,	'2019-08-02',	'E',	1,	1),
(133,	'Pâmela',	12.00,	'2019-08-05',	'E',	1,	1),
(134,	'Andressa',	15.00,	'2019-08-05',	'E',	1,	1),
(135,	'Felipe',	100.00,	'2019-08-05',	'E',	1,	1),
(136,	'Elza',	75.00,	'2019-08-05',	'E',	1,	1),
(137,	'Keila',	100.00,	'2019-08-01',	'S',	1,	1),
(138,	'Compras sp',	100.00,	'2019-08-01',	'S',	1,	1),
(139,	'Agda vendas',	48.00,	'2019-08-01',	'E',	1,	1),
(140,	'Nathália',	55.00,	'2019-08-05',	'E',	1,	1),
(141,	'Aluguel',	380.00,	'2019-07-29',	'S',	1,	1),
(142,	'Bete',	60.00,	'2019-08-07',	'E',	1,	1),
(143,	'Neves',	85.00,	'2019-08-07',	'E',	1,	1),
(144,	'Lu',	45.00,	'2019-08-07',	'E',	1,	1),
(145,	'Keila',	375.00,	'2019-08-08',	'S',	1,	1),
(146,	'Mileide',	40.00,	'2019-08-09',	'E',	1,	1),
(147,	'Elenita',	87.00,	'2019-08-12',	'E',	1,	1),
(148,	'Ingrid',	35.00,	'2019-08-14',	'E',	1,	1),
(149,	'Lúcia',	57.00,	'2019-08-14',	'E',	1,	1),
(150,	'Melissa',	30.00,	'2019-08-15',	'E',	1,	1),
(151,	'Josy',	76.00,	'2019-08-15',	'E',	1,	1),
(152,	'Sp',	50.00,	'2019-08-19',	'S',	1,	1),
(153,	'Aluguel',	380.00,	'2019-08-19',	'S',	1,	1),
(154,	'Fatima',	25.00,	'2019-08-19',	'E',	1,	1),
(155,	'Dona Lurdes',	10.00,	'2019-08-19',	'E',	1,	1),
(156,	'Mileide',	18.00,	'2019-08-20',	'E',	1,	1),
(157,	'Patrícia',	50.00,	'2019-08-22',	'E',	1,	1),
(158,	'Rute',	50.00,	'2019-08-22',	'E',	1,	1),
(159,	'Bete',	229.00,	'2019-08-23',	'E',	1,	1),
(160,	'Cartão',	466.00,	'2019-08-23',	'E',	1,	1),
(161,	'Sp',	462.00,	'2019-08-23',	'S',	1,	1),
(162,	'Sp',	466.00,	'2019-08-23',	'S',	1,	1),
(163,	'Pâmela aluguel',	50.00,	'2019-08-23',	'E',	1,	1),
(164,	'Melissa',	20.00,	'2019-08-23',	'E',	1,	1),
(165,	'Kathem',	130.00,	'2019-08-23',	'E',	1,	1),
(166,	'Rute',	100.00,	'2019-08-24',	'E',	1,	1),
(167,	'Lurdes',	20.00,	'2019-08-26',	'E',	1,	1),
(168,	'Jocy',	30.00,	'2019-08-27',	'E',	1,	1),
(169,	'Dona Cida',	25.00,	'2019-08-28',	'E',	1,	1),
(170,	'Nalva',	105.00,	'2019-08-29',	'E',	1,	1),
(171,	'Keila comissão',	36.00,	'2019-08-29',	'S',	1,	1),
(172,	'Wellington',	767.00,	'2019-08-30',	'E',	1,	1),
(173,	'Rute',	100.00,	'2019-08-30',	'E',	1,	1),
(174,	'Elenita',	140.00,	'2019-08-30',	'E',	1,	1),
(175,	'Compras sp',	50.00,	'2019-09-04',	'S',	1,	1),
(176,	'Franciele',	142.00,	'2019-09-06',	'E',	1,	1),
(177,	'Zélia ',	130.00,	'2019-09-06',	'E',	1,	1),
(178,	'Lurdes saia',	45.00,	'2019-09-09',	'E',	1,	1),
(179,	'Janete',	54.00,	'2019-09-13',	'E',	1,	1),
(180,	'Angela',	350.00,	'2019-09-13',	'E',	1,	1),
(181,	'Agda',	224.80,	'2019-09-13',	'E',	1,	1),
(182,	'Claudete',	5.00,	'2019-09-13',	'E',	1,	1),
(183,	'Jenifer',	45.00,	'2019-09-13',	'E',	1,	1),
(184,	'São Paulo',	90.00,	'2019-09-13',	'S',	1,	1),
(185,	'Cris entrada',	150.00,	'2019-09-17',	'E',	1,	1),
(186,	'Aluguel',	380.00,	'2019-09-17',	'S',	1,	1),
(187,	'Letícia',	250.00,	'2019-09-19',	'E',	1,	1),
(188,	'Sp compra',	92.00,	'2019-09-19',	'S',	1,	1),
(189,	'Cartão',	148.25,	'2019-09-19',	'S',	1,	1),
(190,	'Ingrid',	100.00,	'2019-09-19',	'E',	1,	1),
(191,	'Larissa',	60.00,	'2019-09-19',	'E',	1,	1),
(192,	'Sp',	47.00,	'2019-09-23',	'S',	1,	1),
(193,	'Amiga da Vi',	45.00,	'2019-09-23',	'E',	1,	1),
(194,	'Rosa',	30.00,	'2019-09-23',	'E',	1,	1),
(195,	'Francisca',	135.00,	'2019-09-24',	'E',	1,	1),
(196,	'Angela laço',	10.00,	'2019-09-26',	'E',	1,	1),
(197,	'Michele',	180.00,	'2019-09-27',	'E',	1,	1),
(198,	'Juliana',	100.00,	'2019-09-30',	'E',	1,	1),
(199,	'Juliana',	220.00,	'2019-09-30',	'E',	1,	1),
(200,	'Emerson',	32.00,	'2019-09-30',	'E',	1,	1),
(201,	'Agda',	80.00,	'2019-09-30',	'E',	1,	1),
(202,	'Vicentina',	50.00,	'2019-09-30',	'E',	1,	1),
(203,	'Sp',	122.00,	'2019-10-09',	'S',	1,	1),
(204,	'Aluguel Jaqueline',	100.00,	'2019-10-10',	'E',	1,	1),
(205,	'Tele',	150.00,	'2019-10-14',	'E',	1,	1),
(206,	'Sp',	82.00,	'2019-10-16',	'S',	1,	1),
(207,	'Janete',	50.00,	'2019-10-16',	'E',	1,	1),
(208,	'Benedita',	50.00,	'2019-10-16',	'E',	1,	1),
(209,	'Francisca',	32.00,	'2019-10-16',	'E',	1,	1),
(210,	'Jo',	50.00,	'2019-10-16',	'E',	1,	1),
(211,	'Agda',	75.00,	'2019-10-16',	'E',	1,	1),
(212,	'Rute',	180.00,	'2019-10-18',	'E',	1,	1),
(213,	'Franciele',	80.00,	'2019-10-18',	'E',	1,	1),
(214,	'Franciele',	114.00,	'2019-10-18',	'E',	1,	1),
(215,	'Ariane',	145.00,	'2019-10-23',	'E',	1,	1),
(216,	'Letícia madrinha',	40.00,	'2019-10-23',	'E',	1,	1),
(217,	'Elza escola',	762.00,	'2019-10-23',	'E',	1,	1),
(218,	'Jelly',	40.00,	'2019-10-29',	'E',	1,	1),
(219,	'Josefa',	155.00,	'2019-10-29',	'E',	1,	1),
(220,	'Elza',	28.50,	'2019-11-01',	'E',	1,	1),
(221,	'Gil',	76.00,	'2019-11-01',	'E',	1,	1),
(222,	'Aline ',	125.40,	'2019-11-01',	'E',	1,	1),
(223,	'Cartão',	634.92,	'2019-10-17',	'S',	1,	1),
(224,	'Aluguel',	380.00,	'2019-10-17',	'S',	1,	1),
(225,	'Kurdes',	144.00,	'2019-11-01',	'S',	1,	1),
(226,	'Mysley',	35.00,	'2019-11-11',	'E',	1,	1),
(227,	'Cris',	40.00,	'2019-11-12',	'E',	1,	1),
(228,	'Mafalda',	24.00,	'2019-11-12',	'E',	1,	1),
(229,	'Janete',	50.00,	'2019-11-13',	'E',	1,	1),
(230,	'Nevinha',	180.00,	'2019-11-13',	'E',	1,	1),
(231,	'Cida',	20.00,	'2019-11-13',	'E',	1,	1),
(232,	'Ingrid',	150.00,	'2019-11-14',	'E',	1,	1),
(233,	'Celia',	20.00,	'2019-11-14',	'E',	1,	1),
(234,	'Lúcia parque',	145.00,	'2019-11-14',	'E',	1,	1),
(235,	'Lenira',	150.00,	'2019-11-14',	'S',	1,	1),
(236,	'Milaeid ',	24.00,	'2019-11-14',	'E',	1,	1),
(237,	'Mariana',	42.00,	'2019-11-18',	'E',	1,	1),
(238,	'Mariana',	546.00,	'2019-10-31',	'E',	1,	1),
(239,	'Valéria',	110.00,	'2019-04-29',	'E',	2,	1),
(240,	'Barbara',	100.00,	'2019-04-30',	'E',	2,	1),
(241,	'Agda',	139.00,	'2019-05-01',	'E',	2,	1),
(242,	'Fátima',	20.00,	'2019-05-01',	'E',	2,	1),
(243,	'Ester',	50.00,	'2019-05-02',	'E',	2,	1),
(244,	'Lija',	41.00,	'2019-05-02',	'E',	2,	1),
(245,	'Gilmara',	41.00,	'2019-02-05',	'E',	2,	1),
(246,	'Claudete ',	100.00,	'2019-05-03',	'E',	2,	1),
(247,	'Rose ',	64.00,	'2019-05-08',	'E',	2,	1),
(248,	'Amiga Fátima ',	23.00,	'2019-05-11',	'E',	2,	1),
(249,	'Short jeans 2 peças 10 cada',	20.00,	'2019-05-11',	'S',	2,	1),
(250,	'3 calças pretas 24,00 cada',	72.00,	'2019-05-11',	'S',	2,	1),
(251,	'Angela',	55.00,	'2019-05-13',	'E',	2,	1),
(252,	'Teia',	55.00,	'2019-05-21',	'E',	2,	1),
(253,	'Cris',	104.00,	'2019-05-22',	'E',	2,	1),
(254,	'Claudinéia',	167.00,	'2019-05-24',	'E',	2,	1),
(255,	'Agda',	452.00,	'2019-05-27',	'E',	2,	1),
(256,	'Letícia ',	100.00,	'2019-05-28',	'E',	2,	1),
(257,	'Lenilza ',	100.00,	'2019-05-28',	'E',	2,	1),
(258,	'Gil ',	30.00,	'2019-05-30',	'E',	2,	1),
(259,	'Claudete ',	7.00,	'2019-06-05',	'E',	2,	1),
(260,	'Keila',	335.00,	'2019-06-10',	'E',	2,	1),
(261,	'Elenita',	48.00,	'2019-06-14',	'E',	2,	1),
(262,	'Saída ',	110.00,	'2019-06-14',	'S',	2,	1),
(263,	'Paty ',	50.00,	'2019-06-20',	'E',	2,	1),
(264,	'Agda ',	76.00,	'2019-06-23',	'E',	2,	1),
(265,	'Pagamento em junho préstimo ',	190.00,	'2019-06-23',	'S',	2,	1),
(266,	'Agda ',	325.00,	'2019-06-25',	'E',	2,	1),
(267,	'Letícia ',	200.00,	'2019-06-27',	'E',	2,	1),
(268,	'Claudete ',	127.00,	'2019-07-04',	'E',	2,	1),
(269,	'Keila ',	254.00,	'2019-07-11',	'E',	2,	1),
(270,	'Sil ',	30.00,	'2019-07-19',	'E',	2,	1),
(271,	'Yyyy',	25.00,	'2019-08-01',	'E',	2,	1),
(272,	'Claudete ',	50.00,	'2019-08-02',	'E',	2,	1),
(273,	'Agda venda',	371.00,	'2019-07-26',	'E',	2,	1),
(274,	'Empréstimo',	190.00,	'2019-07-20',	'S',	2,	1),
(275,	'Lurdes',	30.00,	'2019-08-07',	'E',	2,	1),
(276,	'Lu ',	45.00,	'2019-08-07',	'E',	2,	1),
(277,	'Cidália',	76.00,	'2019-08-07',	'E',	2,	1),
(278,	'Bárbara',	147.00,	'2019-08-12',	'E',	2,	1),
(279,	'Elenita',	10.00,	'2019-08-12',	'E',	2,	1),
(280,	'Agda',	28.00,	'2019-08-20',	'E',	2,	1),
(281,	'Agda',	132.40,	'2019-08-20',	'E',	2,	1),
(282,	'Emprestimo',	200.00,	'2019-08-20',	'S',	2,	1),
(283,	'Patrícia',	186.00,	'2019-08-22',	'E',	2,	1),
(284,	'Regiane',	350.00,	'2019-08-24',	'E',	2,	1),
(285,	'Compras sp',	50.00,	'2019-09-04',	'E',	2,	1),
(286,	'Lurdes blusa vermelha',	25.00,	'2019-09-09',	'E',	2,	1),
(287,	'Lu',	25.00,	'2019-09-19',	'E',	2,	1),
(288,	'Lu',	25.00,	'2019-09-19',	'E',	2,	1),
(289,	'Lenilza',	100.00,	'2019-09-19',	'E',	2,	1),
(290,	'Francisca',	20.00,	'2019-09-19',	'E',	2,	1),
(291,	'Com',	215.00,	'2019-09-23',	'S',	2,	1),
(292,	'Selma Ingrid',	70.00,	'2019-09-23',	'E',	2,	1),
(293,	'Francisca',	47.00,	'2019-09-24',	'E',	2,	1),
(294,	'Lurdes cardigã',	25.00,	'2019-09-26',	'E',	2,	1),
(295,	'Gil blusa',	20.00,	'2019-09-26',	'E',	2,	1),
(296,	'Sp',	436.00,	'2019-10-09',	'S',	2,	1),
(297,	'Francisca',	18.00,	'2019-10-10',	'E',	2,	1),
(298,	'Claudete',	100.00,	'2019-10-11',	'E',	2,	1),
(299,	'Compra',	518.00,	'2019-10-16',	'S',	2,	1),
(300,	'Lurdes',	48.00,	'2019-10-16',	'E',	2,	1),
(301,	'Letícia',	100.00,	'2019-10-18',	'E',	2,	1),
(302,	'Compra sp',	1010.00,	'2019-10-23',	'E',	2,	1),
(303,	'Elza',	93.00,	'2019-11-01',	'E',	2,	1),
(304,	'Gil',	52.00,	'2019-11-01',	'E',	2,	1),
(305,	'Agda',	40.00,	'2019-10-25',	'E',	2,	1),
(306,	'Patrícia',	20.00,	'2019-11-01',	'E',	2,	1),
(307,	'Francisca',	64.00,	'2019-11-07',	'E',	2,	1),
(308,	'Regiane',	143.00,	'2019-11-11',	'E',	2,	1),
(309,	'Valeria',	102.00,	'2019-11-11',	'E',	2,	1),
(310,	'Cris',	90.00,	'2019-11-12',	'E',	2,	1),
(311,	'Lucelia ',	103.00,	'2019-11-20',	'E',	2,	1),
(312,	'Pão de queijo ',	6.25,	'2019-04-30',	'S',	3,	1),
(313,	'Pão de queijo ',	3.00,	'2019-05-03',	'S',	3,	1),
(314,	'Melado de cana ',	12.00,	'2019-05-07',	'S',	3,	1),
(315,	'Melado ',	20.00,	'2019-05-11',	'S',	3,	1),
(316,	'Fígado e azeitonas ',	12.00,	'2019-05-12',	'S',	3,	1),
(317,	'Cartão Itaú ',	126.00,	'2019-05-21',	'S',	3,	1),
(318,	'Bombinha para veneno ',	10.00,	'2019-05-21',	'S',	3,	1),
(319,	'Abacaxi ',	10.00,	'2019-05-10',	'S',	3,	1),
(320,	'Ovo ',	11.00,	'2019-06-02',	'S',	3,	1),
(321,	'Esfirra ',	17.00,	'2019-06-02',	'S',	3,	1),
(322,	'Ovo ',	10.00,	'2019-06-09',	'S',	3,	1),
(323,	'Leite ',	6.00,	'2019-06-09',	'S',	3,	1),
(324,	'Agda ',	100.00,	'2019-06-09',	'S',	3,	1),
(325,	'Água ',	110.00,	'2019-06-14',	'S',	3,	1),
(326,	'Plano funerário gabeta',	128.00,	'2019-06-23',	'S',	3,	1),
(327,	'Sandra',	44.00,	'2019-11-24',	'E',	1,	1),
(328,	'Tele',	60.00,	'2019-11-24',	'E',	1,	1),
(329,	'Elenita',	142.00,	'2019-10-24',	'E',	1,	1),
(330,	'Barbara',	141.50,	'2019-11-24',	'E',	2,	1),
(331,	'Lucélia',	103.00,	'2019-11-24',	'E',	2,	1),
(332,	'Compras sp',	1430.00,	'2019-11-24',	'S',	2,	1),
(333,	'Compra sp',	1186.00,	'2019-11-25',	'S',	2,	1),
(334,	'Patrícia',	90.00,	'2019-11-26',	'E',	2,	1),
(335,	'Agda',	160.00,	'2019-11-26',	'E',	2,	1),
(336,	'Juliana',	30.00,	'2019-11-28',	'E',	1,	1),
(337,	'Dona Lurdes',	64.00,	'2019-11-28',	'E',	2,	1),
(338,	'Lenira',	20.00,	'2019-11-28',	'E',	2,	1),
(339,	'Rute',	55.00,	'2019-11-28',	'E',	2,	1),
(340,	'Patrícia',	50.00,	'2019-11-28',	'E',	2,	1),
(341,	'Cida ',	20.00,	'2019-11-28',	'E',	2,	1),
(342,	'Dirce',	20.00,	'2019-11-28',	'E',	1,	1),
(343,	'Cida ',	25.00,	'2019-11-28',	'E',	1,	1),
(344,	'Cartão',	900.00,	'2019-11-17',	'S',	1,	1),
(345,	'Selma',	265.00,	'2019-12-04',	'E',	1,	1),
(346,	'Sandra caetano',	10.00,	'2019-12-05',	'E',	1,	1),
(347,	'Aluguel',	380.00,	'2019-11-17',	'S',	1,	1),
(348,	'Sp compras',	1500.00,	'2019-11-29',	'S',	2,	1),
(349,	'Empréstimo',	548.00,	'2019-12-03',	'S',	2,	1),
(350,	'Gil',	85.00,	'2019-12-05',	'E',	2,	1),
(351,	'Lucélia',	100.00,	'2019-12-05',	'E',	2,	1),
(352,	'Gil',	10.00,	'2019-12-05',	'E',	1,	1),
(353,	'Kaoane e Néia',	105.00,	'2019-12-05',	'E',	1,	1),
(354,	'Compra sp',	360.00,	'2019-12-04',	'S',	2,	1),
(355,	'Helen',	145.00,	'2019-12-06',	'E',	1,	1),
(356,	'Tele',	120.00,	'2019-12-09',	'E',	1,	1),
(357,	'Agda',	356.00,	'2019-12-09',	'E',	2,	1),
(358,	'Dona Lurdes',	64.00,	'2019-12-11',	'E',	1,	1),
(359,	'Lurdes',	70.00,	'2019-12-11',	'S',	1,	1),
(360,	'Dona cida',	95.00,	'2019-12-11',	'E',	1,	1),
(361,	'Lúcia parque',	60.00,	'2019-12-11',	'E',	1,	1),
(362,	'Lurdes',	90.00,	'2019-12-11',	'E',	2,	1),
(363,	'Francisca',	54.00,	'2019-12-11',	'E',	2,	1),
(364,	'Elaine amiga lurdes',	88.00,	'2019-12-11',	'E',	2,	1),
(365,	'Dario',	15.00,	'2019-12-11',	'E',	1,	1),
(366,	'Rute',	65.00,	'2019-12-11',	'E',	1,	1),
(367,	'Mis',	50.00,	'2019-12-11',	'E',	2,	1),
(368,	'Dario',	60.00,	'2019-12-11',	'E',	2,	1),
(369,	'Sandra caetano',	20.00,	'2019-12-11',	'E',	1,	1),
(370,	'Letícia',	200.00,	'2019-12-12',	'E',	2,	1),
(371,	'Claudete',	93.00,	'2019-12-12',	'E',	2,	1),
(372,	'Dalva ',	90.00,	'2019-12-12',	'E',	2,	1),
(373,	'Nalva',	10.00,	'2019-12-12',	'E',	1,	1),
(374,	'Wellington',	20.00,	'2019-12-12',	'E',	1,	1),
(375,	'Regiane',	122.50,	'2019-12-14',	'E',	2,	1),
(376,	'Compra sp',	1238.00,	'2019-12-14',	'S',	2,	1),
(377,	'Vicentina',	245.00,	'2019-12-17',	'E',	2,	1),
(378,	'Retirada',	245.00,	'2019-12-17',	'S',	2,	1),
(379,	'Tele',	120.00,	'2019-12-17',	'E',	2,	1),
(380,	'Mariana',	22.00,	'2019-12-17',	'E',	2,	1),
(381,	'Mariana',	351.00,	'2019-12-17',	'E',	1,	1),
(382,	'Janira',	150.00,	'2019-12-18',	'E',	1,	1),
(383,	'Bete',	180.00,	'2019-12-18',	'E',	1,	1),
(384,	'Emprestimo',	548.00,	'2020-01-03',	'S',	2,	1),
(385,	'BH ',	275.00,	'2020-01-06',	'E',	2,	1),
(386,	'Rute',	100.00,	'2020-01-06',	'E',	1,	1),
(387,	'Lucélia',	100.00,	'2019-12-20',	'E',	2,	1),
(388,	'Lucélia',	108.00,	'2020-01-06',	'E',	2,	1),
(389,	'Bete',	102.00,	'2019-12-19',	'E',	2,	1),
(390,	'Jane',	140.00,	'2019-12-23',	'E',	2,	1),
(391,	'Lucélia',	100.00,	'2019-12-23',	'E',	2,	1),
(392,	'Lucélia',	100.00,	'2019-12-20',	'E',	2,	1),
(393,	'Lucélia',	108.00,	'2020-01-06',	'E',	2,	1),
(394,	'Compra sp',	1725.00,	'2019-12-20',	'S',	2,	1),
(395,	'Bh',	1041.00,	'2019-12-17',	'E',	2,	1),
(396,	'Bete',	171.00,	'2019-12-20',	'E',	1,	1),
(397,	'Rute',	150.00,	'2019-12-19',	'E',	1,	1),
(398,	'Janira',	150.00,	'2019-12-18',	'E',	1,	1),
(399,	'Mi',	15.00,	'2019-12-20',	'E',	1,	1),
(400,	'Aluguel',	380.00,	'2019-12-17',	'S',	1,	1),
(401,	'Cartão',	746.00,	'2019-12-17',	'S',	1,	1),
(402,	'Elza',	195.00,	'2019-12-20',	'E',	1,	1),
(403,	'Adriana',	40.00,	'2019-12-17',	'E',	2,	1),
(404,	'Paty',	630.00,	'2020-01-08',	'E',	2,	1),
(405,	'Pâmela',	123.00,	'2020-01-10',	'E',	1,	1),
(406,	'Elza',	123.00,	'2020-01-16',	'E',	1,	1),
(407,	'Barbara',	155.00,	'2020-01-16',	'E',	2,	1),
(408,	'Tele',	910.00,	'2020-01-17',	'E',	2,	1),
(409,	'Lurdes',	72.00,	'2020-01-19',	'E',	2,	1),
(410,	'Agda',	235.20,	'2020-01-19',	'E',	2,	1),
(411,	'Adriana',	40.00,	'2020-01-17',	'E',	1,	1),
(412,	'Sao Paulo',	850.00,	'2020-01-15',	'S',	2,	1),
(413,	'São Paulo',	1205.00,	'2020-01-20',	'S',	2,	1),
(414,	'Aluguel',	200.00,	'2020-01-20',	'S',	2,	1),
(415,	'Parcela',	548.00,	'2020-01-03',	'S',	2,	1),
(416,	'Lenira',	50.00,	'2020-01-17',	'S',	1,	1),
(417,	'Patrícia',	100.00,	'2020-01-21',	'E',	2,	1),
(418,	'Ingrid',	44.00,	'2020-01-21',	'E',	2,	1),
(419,	'Cleuza Elza',	95.00,	'2020-01-22',	'E',	1,	1),
(420,	'Gabriela',	30.00,	'2020-01-23',	'E',	1,	1),
(421,	'Débora',	20.00,	'2020-01-23',	'E',	1,	1),
(422,	'Aluguel',	180.00,	'2020-01-23',	'S',	1,	1),
(423,	'Cleuza Elza',	5.00,	'2020-01-23',	'E',	2,	1),
(424,	'Lucélia',	107.00,	'2020-01-21',	'E',	2,	1),
(425,	'Bete',	100.00,	'2020-01-23',	'E',	2,	1),
(426,	'Elza ',	145.00,	'2020-01-24',	'E',	1,	1),
(427,	'Agda',	173.00,	'2020-01-24',	'E',	2,	1),
(428,	'Dirce',	5.00,	'2020-01-31',	'E',	2,	1),
(429,	'Salário',	1066.14,	'2020-01-07',	'E',	4,	2),
(430,	'Adiantamento',	552.27,	'2019-01-18',	'E',	4,	2),
(431,	'Salário',	881.16,	'2019-02-06',	'E',	4,	2),
(432,	'Tele',	568.00,	'2020-02-02',	'E',	2,	1),
(433,	'Mis',	40.00,	'2020-02-02',	'E',	2,	1),
(434,	'Sônia',	85.00,	'2020-02-08',	'E',	1,	1),
(435,	'Helen',	15.00,	'2020-02-07',	'E',	1,	1),
(436,	'Márcia filha',	10.00,	'2020-02-03',	'E',	1,	1),
(437,	'Rute',	20.00,	'2020-01-31',	'E',	1,	1),
(438,	'Dirce',	5.00,	'2020-01-31',	'E',	1,	1),
(439,	'Bete',	238.17,	'2020-02-05',	'E',	2,	1),
(440,	'Francisca',	81.00,	'2020-02-07',	'E',	2,	1),
(441,	'Dirce',	25.00,	'2020-02-07',	'E',	1,	1),
(442,	'Francisca',	81.00,	'2020-02-06',	'E',	2,	1),
(443,	'Jane nalva',	80.00,	'2020-02-11',	'E',	2,	1),
(444,	'Compra',	930.00,	'2020-02-13',	'S',	2,	1),
(445,	'Cleide cliente',	55.00,	'2020-03-23',	'E',	1,	1),
(446,	'Compra sp ',	920.00,	'2020-03-23',	'S',	2,	1),
(447,	'Agda vendas',	376.00,	'2020-03-23',	'E',	2,	1),
(448,	'Agda roupas pessoais',	70.00,	'2020-03-23',	'E',	2,	1),
(449,	'Rute',	70.00,	'2020-03-23',	'E',	1,	1),
(450,	'Tele',	263.00,	'2020-03-23',	'E',	2,	1),
(451,	'Compra sp',	350.00,	'2020-03-23',	'S',	2,	1),
(452,	'Patrícia',	109.00,	'2020-03-23',	'E',	2,	1),
(453,	'Ingrid',	10.00,	'2020-03-31',	'E',	1,	1),
(454,	'Rute',	100.00,	'2020-03-31',	'E',	1,	1),
(455,	'Cidinha',	25.00,	'2020-03-31',	'E',	1,	1),
(456,	'Mariana',	259.00,	'2020-03-31',	'E',	1,	1),
(457,	'Agda',	230.00,	'2020-03-31',	'E',	2,	1),
(458,	'Magali',	190.00,	'2020-03-31',	'E',	2,	1),
(459,	'Ingrid',	25.00,	'2020-03-31',	'E',	2,	1),
(460,	'Barbara',	104.00,	'2020-03-31',	'E',	2,	1),
(461,	'Regiane',	210.00,	'2020-03-31',	'E',	2,	1),
(462,	'Patrícia',	160.00,	'2020-03-31',	'E',	2,	1),
(463,	'Cidinha',	52.00,	'2020-03-31',	'E',	2,	1),
(464,	'Patrícia 60',	60.00,	'2020-03-31',	'E',	2,	1),
(465,	'Patrícia ',	105.00,	'2020-03-31',	'E',	2,	1),
(466,	'Compra sp',	700.00,	'2020-03-31',	'S',	2,	1),
(467,	'Rmprestimo',	548.00,	'2020-03-31',	'S',	2,	1),
(468,	'Mirian',	20.00,	'2020-03-31',	'E',	1,	1),
(469,	'Claudete',	28.00,	'2020-03-31',	'E',	1,	1),
(470,	'Letícia',	50.00,	'2020-03-31',	'E',	1,	1),
(471,	'Letícia',	100.00,	'2020-03-31',	'E',	2,	1),
(472,	'Patrícia',	80.00,	'2020-03-31',	'E',	2,	1),
(473,	'Rute',	70.00,	'2020-03-31',	'E',	1,	1),
(474,	'Pâmela',	28.00,	'2020-03-31',	'E',	1,	1),
(475,	'Barbara',	120.00,	'2020-03-31',	'E',	1,	1),
(476,	'Francisca',	50.00,	'2020-03-31',	'E',	2,	1),
(477,	'Barbara',	120.00,	'2020-03-31',	'E',	2,	1),
(478,	'Emilene',	300.00,	'2020-03-31',	'E',	1,	1),
(479,	'Emilene',	200.00,	'2020-03-31',	'E',	1,	1),
(480,	'Shirley',	50.00,	'2020-03-31',	'E',	1,	1),
(481,	'Mariana',	100.00,	'2020-04-13',	'E',	1,	1),
(482,	'Lucélia',	96.00,	'2020-04-13',	'E',	2,	1),
(483,	'Patrícia',	100.00,	'2020-04-20',	'E',	2,	1),
(484,	'Barbara ',	100.00,	'2020-04-21',	'E',	2,	1),
(485,	'Dirce',	75.00,	'2020-04-21',	'E',	1,	1),
(486,	'Tele',	1454.00,	'2020-04-26',	'E',	2,	1),
(487,	'Dario',	5.00,	'2020-04-26',	'E',	1,	1),
(488,	'Tele',	155.00,	'2020-04-26',	'E',	1,	1),
(489,	'Agda',	80.00,	'2020-04-26',	'E',	2,	1),
(490,	'Agda',	42.80,	'2020-04-26',	'E',	1,	1),
(491,	'Saída ',	42.80,	'2020-04-26',	'S',	1,	1),
(492,	'Agda compra pessoal',	42.80,	'2020-04-26',	'E',	2,	1),
(493,	'Pâmela',	20.00,	'2020-04-29',	'E',	1,	1),
(494,	'Patrícia',	100.00,	'2020-05-11',	'E',	2,	1),
(495,	'Helen',	15.00,	'2020-05-22',	'E',	1,	1),
(496,	'Agda',	122.00,	'2020-05-25',	'E',	2,	1),
(497,	'Thaimara',	25.00,	'2020-05-27',	'E',	1,	1),
(498,	'Sil agasalho',	60.00,	'2020-05-31',	'E',	2,	1),
(499,	'Tele',	611.00,	'2020-05-31',	'E',	2,	1),
(500,	'Parcela',	548.00,	'2020-05-31',	'S',	2,	1),
(501,	'Ivana',	40.00,	'2020-06-10',	'E',	2,	1),
(502,	'Patrícia',	130.00,	'2020-06-10',	'E',	2,	1),
(503,	'Keila',	180.00,	'2020-06-10',	'E',	2,	1),
(504,	'Yasmin',	227.50,	'2020-06-10',	'E',	2,	1),
(505,	'Agda',	12.00,	'2020-06-10',	'E',	2,	1),
(506,	'Agda Ariane',	48.00,	'2020-06-10',	'E',	1,	1),
(507,	'Dario',	10.00,	'2020-06-16',	'E',	1,	1),
(508,	'Patrícia Regiane',	70.00,	'2020-06-16',	'E',	2,	1),
(509,	'Agda',	6.00,	'2020-06-21',	'E',	2,	1),
(510,	'Dani pijama',	120.00,	'2020-06-25',	'E',	1,	1),
(511,	'Thelma',	78.50,	'2020-06-25',	'E',	2,	1),
(512,	'Parecela',	548.90,	'2020-06-25',	'S',	2,	1),
(513,	'Dani pijama',	60.00,	'2020-06-27',	'E',	1,	1),
(514,	'Rute  pijama',	20.00,	'2020-06-27',	'E',	1,	1),
(515,	'Thais cortina',	20.00,	'2020-06-27',	'E',	1,	1),
(516,	'Agda ',	115.50,	'2020-06-27',	'E',	2,	1),
(517,	'Agda',	50.00,	'2020-07-05',	'E',	2,	1),
(518,	'Laine Lenira',	25.00,	'2020-07-05',	'E',	2,	1),
(519,	'Barbara kethy',	100.00,	'2020-07-05',	'E',	2,	1),
(520,	'Thelma',	97.00,	'2020-07-05',	'E',	2,	1),
(521,	'Rute mae',	50.00,	'2020-07-07',	'E',	1,	1),
(522,	'Sil',	100.00,	'2020-07-19',	'E',	2,	1),
(523,	'Lilian calça  ',	18.00,	'2020-07-22',	'E',	2,	1),
(524,	'Elza calças 4 pecas',	127.50,	'2020-07-22',	'E',	2,	1),
(525,	'Silvana',	200.00,	'2020-07-27',	'E',	2,	1),
(526,	'Julita',	70.00,	'2020-07-27',	'E',	2,	1),
(527,	'Elenita',	136.00,	'2020-07-27',	'E',	1,	1),
(528,	'Dona Lurdes',	50.00,	'2020-07-27',	'E',	1,	1),
(529,	'Rafaela',	15.00,	'2020-07-27',	'E',	1,	1),
(530,	'Rute',	60.00,	'2020-07-29',	'E',	2,	1),
(531,	'Georgia',	70.00,	'2020-07-29',	'E',	2,	1),
(532,	'Telma',	117.00,	'2020-07-29',	'E',	2,	1),
(533,	'Keila',	110.00,	'2020-07-29',	'E',	2,	1),
(534,	'Parecela',	548.00,	'2020-07-29',	'S',	2,	1),
(535,	'Vagner',	30.00,	'2020-08-09',	'E',	2,	1),
(536,	'Agda',	34.50,	'2020-08-09',	'E',	2,	1),
(537,	'Agda',	71.00,	'2020-08-09',	'E',	2,	1),
(538,	'Lucélia',	65.00,	'2020-08-05',	'E',	2,	1),
(539,	'Lú',	55.00,	'2020-08-14',	'E',	2,	1),
(540,	'Lú',	32.00,	'2020-08-14',	'E',	1,	1),
(541,	'Barbara',	100.00,	'2020-08-14',	'E',	2,	1);

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `senha` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuarios` (`id`, `email`, `senha`) VALUES
(1,	'hmneton@gmail.com',	'55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251'),
(2,	'oispneto@gmail.com',	'4460697fc93fcc2eb4cda1550b5212976b5ce8c4a52486ce35c72cb75224318b'),
(3,	'f@gmail.com',	'82bc79eb224ea98d47f241bfa30d67c2346232c4c6a6e7be8d3dc69110f904cf');

-- 2020-09-29 06:38:18