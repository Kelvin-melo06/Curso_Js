const somaInfinita = (...numeros) => { // Função que aceita um número indefinido de argumentos
  return numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
}

console.log(somaInfinita(1, 2, 3, 4, 5)); // Saída: 15


// -----------------------------------------------------------------------


const somaInfinita2 = (...numeros) => {
    let total= 0;
    for(let numero of numeros) { // Percorre cada número nos argumentos
        total += numero;
    }

    return total;
}

console.log(somaInfinita2(10, 20, 30)); // Saída: 60