<?php

require('conta.php');
require('titular.php');
require('cpf.php');

$cpfEduardo = new Cpf('983.983.902-74');
$eduardo = new Titular($cpfEduardo, 'José Eduardo da Silva Bezerra');

$cpfMaria = new Cpf('123.456.789-10');
$maria = new Titular($cpfMaria, 'Maria Souza');

$cpfJoao = new Cpf('987.654.321-00');
$joao = new Titular($cpfJoao, 'João Oliveira');

$cpfAna = new Cpf('111.222.333-44');
$ana = new Titular($cpfAna, 'Ana Silva');

$cpfCarlos = new Cpf('555.666.777-88');
$carlos = new Titular($cpfCarlos, 'Carlos Ferreira');

// Criando mais contas com os novos titulares
$conta2 = new Conta($maria);
$conta3 = new Conta($joao);
$conta4 = new Conta($ana);
$conta5 = new Conta($carlos);
$conta1 = new Conta($eduardo);


$conta1->depositar(500);
$conta1->transferir(400, $conta3);

echo "Saldo: R$" . $conta3->recuperarSaldo();
