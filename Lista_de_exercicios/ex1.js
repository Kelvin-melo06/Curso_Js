let numeros = [1, 2, 3, 4, 5];

let resultado_Soma = (numeros, i = 0) => {
    if(numeros[i] === undefined) {
        return 0;
    }
    let soma = 0;
    soma += numeros[i];
    return soma + resultado_Soma(numeros, i + 1);
}

console.log(resultado_Soma(numeros));