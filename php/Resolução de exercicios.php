<?php 
 
// Crie um algoritmo que receba um número digitado pelo usuário e verifique se esse valor é positivo, negativo ou igual a zero. 
// A saída deve ser: "Valor Positivo", "Valor Negativo" ou "Igual a Zero".

function verificarValor($valorEntrada) 
{
    if ($valorEntrada > 0 ) {
        echo 'Valor positivo' . PHP_EOL;
    } else if ($valorEntrada < 0) {
        echo 'Valor negativo'. PHP_EOL;
    } else {
        echo 'Igual a zero'. PHP_EOL;
    }
}


function tabuada($valorTabuada) 
{
    for($i = 0; $i <= 10; $i++) {
        $resultado = $valorTabuada * $i;
        echo "{$valorTabuada} x {$i} = " . $resultado . PHP_EOL;
    }
}

function calcularFatorial($valorFatorial) 
{
    if ($valorFatorial > 0) {
        $valor = $valorFatorial;

        for ($i = $valor - 1; $i > 0; $i--) {
            $valor = $valor * $i;
        }

        echo '!' . $valorFatorial . ' = ' . $valor . PHP_EOL;
    }
}

//Crie um programa em que o usuário escolha uma operação (soma, subtração, multiplicação ou divisão). 
//Crie duas caixas de texto para receber 2 números. Realize a operação escolhida em cada um dos números. 
function operar($valor1, $operacao, $valor2) 
{
    if($operacao === '+') 
    {
        $resultado = $valor1 + $valor2;
        return $resultado;
    }
    else if($operacao === '-') 
    {
        $resultado = $valor1 - $valor2;
        return $resultado;
    }
    else if($operacao === 'x') 
    {
        $resultado = $valor1 * $valor2;
        return $resultado;
    }
    else if($operacao === '/') 
    {
        $resultado = $valor1 / $valor2;
        return $resultado;
    }
    else 
    {
        return 'Operação inválida';
    }
}

echo operar(200, '-', 100);


//Faça um algoritmo PHP que receba os valores A e B, imprima-os em ordem crescente em relação aos seus valores. 
//Exemplo, para A=5, B=4. Você deve imprimir na tela: "4 5".

$A = 45;
$B = 99;

if ($A > $B)
{
    echo $A . ' '. $B . PHP_EOL;
} else {
    echo $B . ' '. $A . PHP_EOL;
}




