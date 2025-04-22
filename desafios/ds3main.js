const {gets, print} = require('./ds3auxiliar')

function calcularSalarioLiquido(salarioBruto, beneficios){
    let aliqota;

    if(salarioBruto <= 1100.00){
        aliqota = 0.05;
    }else if(salarioBruto <= 2500.00){
        aliqota = 0.10;
    } else{
        aliqota = 0.15;
    }

    const imposto = salarioBruto * aliqota;
    const salarioLiquido = salarioBruto - imposto + beneficios;
    return salarioLiquido.toFixed(2);
}

let salarioBruto = gets();
let beneficios = 250;
let resultado = calcularSalarioLiquido(salarioBruto, beneficios);
print(resultado);