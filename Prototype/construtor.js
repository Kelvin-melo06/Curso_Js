class Cachorro{
    constructor(nome, raca, idade, peso){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.peso = peso;
    }

    latir(){
        console.log(`${this.nome} está latindo!`);
    }
}

Cachorro.prototype.uivar = function(){ // Adiciona o método uivar ao protótipo da classe Cachorro "JEITO ANTIGO"
    console.log(`${this.nome} está uivando!`);
}

const pastorAlemao = new Cachorro("Rex", "Pastor Alemão", 5, 30);
const pitbull = new Cachorro("Max", "Pitbull", 3, 25);

console.log(pitbull.uivar());


// console.log(Cachorro.prototype === Object.getPrototypeOf(pastorAlemao)); // true