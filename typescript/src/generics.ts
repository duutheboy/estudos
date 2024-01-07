// Generics
// "..." significa que aceita varios itens, por exemplo mais de um array
// T é paara funcionar a tipação do vetor, antes de declarar os valores do vetor tem que passar o tipo, por exmplo no array abaixo

function concatArray<T>(...itens: T[]):T[] {
    return new Array().concat(...itens);
}

// Definindo T como o tipo, por exemplo quero que esse newArray retorno apenas um vetor de numeros
const newArray = concatArray<number[]>([1, 3], [33]);
console.log(newArray);