
let numerosIntervalo = (inicio, fim) => {
    let numeros = []; 
    for(let i = inicio; i <= fim; i++){
        numeros.push(i);
    }
    return numeros;
}

let numeros = numerosIntervalo(1, 10);

let paresIntervalo = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(paresIntervalo);
