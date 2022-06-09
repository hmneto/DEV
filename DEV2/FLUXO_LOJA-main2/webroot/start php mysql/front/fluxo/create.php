<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
// Cria o cURL
$curl = curl_init();
// Seta algumas opções
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://api/fluxo/create.php',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => [
        'login' => $_POST['login'],
        'fluxo' => $_POST['fluxo']
    ]
]);
// Envia a requisição e salva a resposta
$response = curl_exec($curl);
// Fecha a requisição e limpa a memória
curl_close($curl);
print_r($response);