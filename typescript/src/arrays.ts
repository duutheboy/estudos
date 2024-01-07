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