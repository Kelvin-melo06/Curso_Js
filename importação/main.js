const {gets, print} = require('./funcoesauxiliares') // o REQUIRE serve para importação do que está sendo exportado

const numerosSorteados = [];

for(i = 0; i < 5; i++){
    let numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorNumero = 0;

for(i = 0; i < numerosSorteados.length; i++){
    let numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);