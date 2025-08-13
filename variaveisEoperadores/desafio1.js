let preco_Combustivel = 4.13;
let combustivel_Por_Km = 8;
let distancia_Viagem = 1580;

let combustivel_Gasto = distancia_Viagem / combustivel_Por_Km;
let valor_Viagem = combustivel_Gasto * preco_Combustivel;
console.log(`O valor gasto na viagem foi de \n ${valor_Viagem.toFixed(2)} Reais`);

// .toFixed() é uma função que arruma as casas decimais de um numero e em consequencia transforma esse númmero em um string