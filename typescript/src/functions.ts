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