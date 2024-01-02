//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Saiba mais sobre Template Strings: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
function agendarPagamento() {
  
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

console.log(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);

}

agendarPagamento();

// TODO: Imprima a saída adequada utilizando o conceito de template strings:

print(` `);

//Entrada

//Sabrina
//5000
//04/12/2023	

//Saída

//Pagamento Agendado! Valor: R$ 5000, vencimento 04/12/2023.
