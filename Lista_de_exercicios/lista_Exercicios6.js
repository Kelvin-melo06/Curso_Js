/*


Crie uma classe para representar pessoas.
Para cada pessoa teremos os attributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer o valor de seu IMC


*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
       this.nome = nome;
       this.peso = peso;
       this.altura = altura;
    }

    calcular_Imc(){
      return this.peso / Math.pow(this.altura, 2);
    }

    classificar_Imc(imc){
        if(imc < 18.5){
            return 'estou abaixo do peso!'
        } else if(imc >= 18.5 && imc < 25){
            return 'estou no peso ideal!'
        } else if(imc >= 25 && imc < 30){
            return 'estou acima do peso!'
        } else if (imc >= 30 && imc < 40){
            return 'estou está obeso!'
        } else {
            return 'estou em obesidade severa!'
        }
    }
}

const josé = new Pessoa('José', 70, 1.75);
const imc = josé.calcular_Imc();
let classificação = josé.classificar_Imc(imc);
console.log(`Meu nome é ${josé.nome} tenho ${josé.peso} Kg, ${josé.altura} m de altura, meu IMC é ${imc.toFixed(2)} então ${classificação}`); 