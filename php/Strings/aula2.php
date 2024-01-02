<?php
// Verificar inicio e fim de uma string

$url = "https://twitter.com/home";
// Verificar se a string começa com algo especifico
$verificaUrl = str_starts_with($url, "https");
// Verificar se a string termina com algo especifico
$verificaFUrl = str_ends_with($url, "/home");

if ($verificaUrl == true && $verificaFUrl == true )
{
    echo "O site $url , é seguro";
    return;
}
