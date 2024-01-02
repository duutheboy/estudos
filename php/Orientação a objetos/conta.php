<?php

class Conta
{
    private $titular;
    private $saldo = 0;
    private static $numeroContas = 0;

    public function __construct($titular)
    {
        $this->saldo = 0;
        $this->titular = $titular;
        self::$numeroContas++;
    }

    public function __destruct()
    {
        self::$numeroContas--;
    }

    public function sacar(float $valorASacar): void
    {
        if ($valorASacar > $this->saldo) {
            echo 'Você não possui saldo para realizar a transação' . PHP_EOL;
            return;
        }
        $this->saldo -= $valorASacar;
    }

    public function depositar(float $valorDeposito): void
    {
        if ($valorDeposito < 0) {
            echo 'Selecione um valor válido para depósito';
            return;
        }
        $this->saldo += $valorDeposito;
    }

    public function transferir($valorTransferencia, $contaTransferencia): void
    {
        if ($valorTransferencia > $this->saldo) {
            echo 'Saldo indisponível!';
            return;
        }
        $this->sacar($valorTransferencia);
        $contaTransferencia->depositar($valorTransferencia);
        echo 'Transferência realizada com sucesso' . PHP_EOL;
    }

    public function recuperarSaldo(): float
    {
        return $this->saldo;
    }

    public static function recuperaNumContas(): int
    {
        return self::$numeroContas;
    }

    public function getTitular(): string
    {
        return $this->titular->getNome();
    }

    public function getCpfTitular(): string
    {
        return $this->titular->getCpf();
    }
}
