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