class carro{
     marca;
     cor;
     litrosPorKM;

constructor(marca, cor, litrosPorKM) {
    this.marca = marca;
    this.cor = cor;
    this.litrosPorKM = litrosPorKM;
}

cacularGastoDeViagem(distancia, valorCombustível) {
    return distancia * this.litrosPorKM * valorCombustível
}

}

const nivus = new carro('Volkswagem', 'Cinza', 1 / 12);
const fastback = new carro('Fiat', 'Preto', 1 / 15);

console.log("Seu gasto total de combustível na sua viagem será de: R$" + (nivus.cacularGastoDeViagem(100,5)).toFixed(1));
console.log("Seu gasto total de combustível na sua viagem será de: R$" + (fastback.cacularGastoDeViagem(200,5)).toFixed(1));

 