const {gets, print} = require('./funcoes_auxiliares');


const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }

}

print('O Maior número foi: ' + maiorValor);


var age = 10;





if(age >= 80) {
    console.log('O Senhor recebe sua renda da sua pensão')
} else if(age < 65 ) {
    console.log('Todo mês o senhor recebe um salário')
} else if(age < 18) {
    console.log('Você é de menor')
} else {
    console.log("O Valor da variável 'age' não é número")
}

function agendarPagamento(nomeBeneficiario, valorConta, dataVencimento) {
    console.log(`Pagamento Agendado! Valor ${valorConta}, vencimento ${dataVencimento}`);
  }
  
  agendarPagamento("Eduardo", 345, "23/04/2004");




 







