"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printObject(personHero) {
    console.log(personHero);
}
printObject({
    name: "Eduardo",
    hero: "Du"
});
//Tipar variaveis
const nome = "Eduardo";
const idade = 19;
const casado = true;
//null
let nulo = null;
//indefinido
let indefinido = undefined;
//any e void
// quando a função n retorna nada: void, variaveis any aceitar qualquer valor
let semRetorno;
let retornoView = 45;
//objetos sem propriedades especificas
let produto = {
    valor: 34.65,
    nome: "Cerveja",
};
// a variavel novoProduto é do tipo produtoLoja que é uma tipado com varias tipos
let produtoNovo = {
    nome: "Cerveja",
    valor: 5,
    qntd: 10
};
// array (vetores)
let dados = ["Eduardo", "Bezeera", "José", "Junior"];
let dados2 = ["Eduardo", "Bezeera", "José", "Junior"];
// array que aceita mais tipos, por exemplo aceitam numeros e strings
let pessoa1 = ["Eduardo", 19, "Bezerra", 20, false];
// Tuplas (array com varios tipos porem com lugar certo)
let boleto = ["Energia", 199.90];
// Datas
let aniversarioDu = new Date("2024-04-23 05:00");
console.log(aniversarioDu.toString());
// Funções. é possivel tipar funções
function multiplicarNum(num1, num2) {
    return num1 * num2;
}
//  Funções multi tipos
// por exemplo uma função que aceita numeros e string
function callToPhone(phone) {
    return phone;
}
// Funções async
function getData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "du";
    });
}
const rb = {
    id: 10,
    name: "du"
};
class robos {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
