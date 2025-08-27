// Criamos uma Promise para um número único
const numeroParaTestar = 12;

const minhaPromessa = new Promise((resolve, reject) => {
    // Usamos setTimeout para simular uma operação assíncrona
    setTimeout(() => {
        // A condição de teste de par ou ímpar está aqui
        if (numeroParaTestar % 2 === 0) {
            resolve(`Esse número é par: ${numeroParaTestar}!`);
        } else {
            reject(`Esse número é ímpar: ${numeroParaTestar}!`);
        }
    }, 1000); // Espera 1 segundo para o resultado
});

minhaPromessa
    .then((resultado) => {
        console.log(`Sucesso: ${resultado}`);
    })
    .catch((erro) => {
        console.log(`Erro: ${erro}`);
    })
    .finally(() => {
        // Esta linha é executada sempre, no sucesso ou na falha
        console.log("A Promise foi finalizada.");
    });

console.log("O programa continua executando...");