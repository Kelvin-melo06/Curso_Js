const notas = [];

//Adicionando nota na array
notas.push(5,7,9,10,5,7);

//Variavel que vai guardar o valor anterior pego para somar com o posterior
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    soma =  soma + nota;
}

const media = soma / notas.length;
console.log(`Sua media é ${media.toFixed(2)}`);