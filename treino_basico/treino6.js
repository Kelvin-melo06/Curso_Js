class Carro {
    marca;
    modelo;
    ano;
    velocidadeAtual;

    constructor(marca, modelo, ano, velocidadeAtual){
       this.marca = marca;
       this.modelo = modelo;
       this.ano = ano;
       this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(){
        this.velocidadeAtual += 10
        console.log(`Velocidade atual após acelerar: ${this.velocidadeAtual} Km/h`);
    }

    frear(){
        this.velocidadeAtual -= 10
        console.log(`Velocidade atual após freiar: ${this.velocidadeAtual} Km/h`);
    }
}

let carro1 = new Carro('toyota', 'Toyota Corolla', 2009, 100)
console.log(carro1);

carro1.acelerar();
carro1.frear();
