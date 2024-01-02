const notas = [];

notas.push(8);
notas.push(3);
notas.push(9);
notas.push(7);
notas.push(4);
notas.push(7);
notas.push(4);

let soma = 0;

for (let i=0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
};

console.log("Soma total das notas:" + soma);