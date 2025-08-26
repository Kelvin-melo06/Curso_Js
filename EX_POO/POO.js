class Veiculo {
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    apresentar(){
        console.log(`A marca do veiculo é ${this.marca}, o modelo é ${this.modelo} e o ano é ${this.ano}`);
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,ano,cor,portas){
        super(marca,modelo,ano);
        this.cor = cor;
        this.portas = portas;
    }
    ligar(){
        console.log(`O carro do modelo ${this.modelo} está ligado!`);
    }
}

class Moto extends Veiculo{
    constructor(marca,modelo,ano,cilindradas,tipo){
        super(marca,modelo,ano);
        this.cilindradas = cilindradas;
        this.tipo = tipo;
    }
    empinar(){
        console.log(`A moto do modelo ${this.modelo} está empinando!`);
    }
}

const carro1 = new Carro('Chevrolet','Onix',2020,'Prata',4);
console.log(carro1);
carro1.ligar();
carro1.apresentar();
const moto1 = new Moto('Honda','CB 500',2019,500,'Esportiva');
console.log(moto1);
moto1.empinar();
moto1.apresentar();