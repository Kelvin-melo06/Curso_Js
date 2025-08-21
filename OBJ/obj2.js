const pessoa = {
    nome: 'José',
    peso: 70,
    altura: 1.75,
    andar(){
        console.log(`${this.nome} está andando!`);
    }
}

console.log(pessoa);
pessoa.andar();