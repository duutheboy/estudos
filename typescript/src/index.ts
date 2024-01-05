type hero = {
    name: string;
    hero: string;
}

function printObject(personHero: hero) {
    console.log(personHero);
}

printObject({
    name: "Eduardo",
    hero: "Du"
});

//Tipar variaveis

const nome: string = "Eduardo";
const idade: number = 19;
const casado: boolean = true;

//null

let nulo: null = null;

//indefinido

let indefinido: undefined = undefined;

//any e void
// quando a função n retorna nada: void, variaveis any aceitar qualquer valor

let semRetorno: void
let retornoView: any = 45;

//objetos sem propriedades especificas

let produto: object = {
    valor:  34.65,
    nome: "Cerveja",
};

//objetos

type produtoLoja = {
    nome: string,
    valor: number,
    qntd: number
};

// a variavel novoProduto é do tipo produtoLoja que é uma tipado com varias tipos

let produtoNovo: produtoLoja = {
    nome: "Cerveja",
    valor: 5,
    qntd: 10
};

// array (vetores)

let dados: string[] = ["Eduardo", "Bezeera", "José", "Junior"];
let dados2: Array<string> = ["Eduardo", "Bezeera", "José", "Junior"];

// array que aceita mais tipos, por exemplo aceitam numeros e strings

let pessoa1: (string | number | boolean)[] = ["Eduardo", 19, "Bezerra", 20, false];

// Tuplas (array com varios tipos porem com lugar certo)

let boleto:[string, number] = ["Energia", 199.90];

// Datas

let aniversarioDu: Date = new Date("2024-04-23 05:00");
console.log(aniversarioDu.toString());

// Funções. é possivel tipar funções

function multiplicarNum(num1: number, num2: number): number {
    return num1 * num2;
}

//  Funções multi tipos
// por exemplo uma função que aceita numeros e string

function callToPhone(phone: number | string) {
    return phone;
}

// Funções async

async function getData(id: number): Promise<number | string> {
    return "du";
}

// interfaces são párecidos com o "type"

type robot = {
    readonly id: number | string,
    name: string
};

const rb: android = {
    id: 10,
    name: "du"
}

interface android {
    id: number | string,
    name: string
}

class robos implements robot {
    id: string | number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}