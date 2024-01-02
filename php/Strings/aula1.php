<?php
// Verificar string dentro de outra string

$nome = "José Eduardo Santos";
// Variável armazenando a verificação da string $nome
$sobrenomeBezerra = str_contains($nome, 'Bezerra');

if ($sobrenomeBezerra == true) 
{
    echo "$nome, é da sua família" . PHP_EOL;
    return;
} else if ($sobrenomeBezerra == false) 
{
    echo "$nome, não é da sua família" .  PHP_EOL;
    return;
}
