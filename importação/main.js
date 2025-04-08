const {gets, print} = require('./funcoesauxiliares') // o REQUIRE serve para importação do que está sendo exportado

let quantidadeAlunos = gets();
let maiorNumero = 0;

for(i = 0; i < quantidadeAlunos; i++){
    let numeroSorteado = gets();
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
    }
}


print(maiorNumero);