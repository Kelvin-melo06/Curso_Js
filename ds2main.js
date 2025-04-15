const {gets, print} = require('./dsf2auxiliar');

const valor = [];

while(true){
    let numeros = gets();
    if(numeros === undefined){
        break;
    }
    valor.push(numeros);
}

let maiorPar = 0;
let maiorImpar = 0;

valor.forEach(num =>{
    if(num % 2 === 0){
        if(num > maiorPar){
            maiorPar = num;
        }
    }else{
        if(num > maiorImpar){
            maiorImpar = num;
        }
    }
})

print(`Maior numero par : ${maiorPar}`);
print(`Maior número impar: ${maiorImpar}`);