function* meuGerador() {
    console.log("Iniciando...");
    yield 1; // Pausa a função e retorna 1
    console.log("Continuando...");
    yield 2; // Pausa a função e retorna 2
    console.log("Finalizando...");
    return 3; // Encerra a função e retorna 3
}

const gerador = meuGerador();

console.log(gerador.next());
// Saída:
// Iniciando...
// { value: 1, done: false }

console.log(gerador.next());
// Saída:
// Continuando...
// { value: 2, done: false }

console.log(gerador.next());
// Saída:
// Finalizando...
// { value: 3, done: true }