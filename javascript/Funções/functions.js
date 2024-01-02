
//EX1

const combustível = 4.76;
const distanciaKM = 200;
const valorMedioCombustível = distanciaKM / combustível;

console.log(valorMedioCombustível);

//EX2

const nota1 = 8.5;
const nota2 = 10;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
    console.log("Você foi aprovado, parabéns")
} else if(media < 7) {
    console.log("Você está na recuperação")
    if (media < 5) {
        console.log("Você foi reprovado")
    }
}

//EX 2 IMC

const peso = 80;
const altura = 1.89;

const bmi = peso / (altura ** 2);

if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            console.log("Você está no peso ideal!");
        }

        else if (bmi > 25 && bmi <= 30) {
            console.log("Cuidado! Você está com sobrepeso!");
        }

        else if (bmi > 30 && bmi <= 35) {
            console.log("Cuidado! Você está com obesidade moderada!");
        }

        else if (bmi > 35 && bmi <= 40) {
            console.log("Cuidado! Você está com obesidade severa!");
        }

        else {
            console.log("Cuidado! Você está com obesidade morbida!");
        }



//EX 3 FUNCTIONS

function dizerNome(nome) {
    console.log("Meu nome é " + nome);
}

dizerNome("Eduardo");


function calcularPotencia(num,indice) {
    console.log(num ** indice);
}



calcularPotencia(10,10);

function calculadoraDeJuros(valor,percentualJuros) {
    const valorAdicional = (percentualJuros / 100) * valor
    return valorAdicional + valor;
}


//Saidas
console.log(calculadoraDeJuros(500,5))
console.log(calculadoraDeJuros(2313213,3))


function calcularIMC(altura,peso) {
    bmi = peso / (altura ** 2).tofixed(2);
    
    console.log("Seu imc é: " + bmi);

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!';
    } 

    else if (bmi >= 18.5 && bmi <= 25) {
        console.log("Você está no peso ideal!");
    }

    else if (bmi > 25 && bmi <= 30) {
        console.log("Cuidado! Você está com sobrepeso!");
    }

    else if (bmi > 30 && bmi <= 35) {
        console.log("Cuidado! Você está com obesidade moderada!");
    }

    else if (bmi > 35 && bmi <= 40) {
        console.log("Cuidado! Você está com obesidade severa!");
    }

    else {
        console.log("Cuidado! Você está com obesidade morbida!");
    }
    
}

calcularIMC(1.78,80);


