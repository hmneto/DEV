<?php
// ;extension=php_gd2.dll
// Define o header como sendo de imagem
header("Content-type: image/jpeg");
// Cria a imagem a partir de uma imagem jpeg
$i = imagecreatefromjpeg("elephpant.jpg");
// Definições
$preto = imagecolorallocate($i, 0,0,0); # Cor preta
$texto = "faael webmaster"; # Texto a ser escrito
$fonte = "trebuc.ttf"; # Fonte que será utilizada
// Escreve na imagem
imagettftext($i, 32, 0, 160,360,$preto,$fonte,$texto);
// Gera a imagem na tela
imagejpeg($i);
// Destroi a imagem para liberar memória
imagedestroy($i);
?>