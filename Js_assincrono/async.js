const somar = (n1, n2) => {
     return new Promise((resolve) => {
        setTimeout((number1, number2) => {
            const resultado = number1 + number2;
            resolve(resultado);
        },3000)
     })
}

async function mostrarSoma(){
    const resultado = await somar(10,20); // await é usado para esperar a resolução de uma promessa dentro de uma função assíncrona. No exemplo acima, a execução da função mostrarSoma é pausada até que a promessa retornada pela função somar seja resolvida, permitindo que o código continue de forma síncrona após a resolução.
    console.log(`O resultado da soma é: ${resultado}`);
}
