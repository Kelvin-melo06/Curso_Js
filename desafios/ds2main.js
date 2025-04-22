const {gets, print} = require('./dsf2auxiliar');

const valor = [];

while(true){
    let numeros = gets();
    if(numeros === undefined){
        break;
    }
    valor.push(numeros);
}

let maiorPar = null;
let menorImpar = null;

valor.forEach(num =>{
    if(num % 2 === 0){
        if(maiorPar === null){
            maiorPar = num;
        }else if(num > maiorPar){
            maiorPar = num;
        }
    }else{
        if(menorImpar === null){
            menorImpar = num;
        }else if(num < menorImpar){
            menorImpar = num;
        }
    }
})

print(`Maior numero par : ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);