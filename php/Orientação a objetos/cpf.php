<?php

class Cpf
{
    private $numCpf;

    public function __construct(string $numCpf)
    {
        $this->validaCpfTitular($numCpf);
        $this->numCpf = $numCpf;
    }

    public function getCpf(): string
    {
        return $this->numCpf;
    }

    private function validaCpfTitular(string $numCpf)
    {
        if (strlen($numCpf) < 13) {
            echo 'Insira um cpf válido!';
            exit();
        }
    }
}
