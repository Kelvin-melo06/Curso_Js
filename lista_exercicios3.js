let peso = 65;
let altura = 1.60;
let imc = peso / Math.pow(altura, 2) //Math é uma biblioteca de funções matématicas
console.log(imc.toFixed(2))

if(imc < 18.5){
    console.log('Voce está abaixo do peso!')
} else if(imc >= 18.5 && imc < 25){
    console.log('Voce está no peso ideal!')
} else if(imc >= 25 && imc < 30){
    console.log('Voce está acima do peso!')
} else if (imc >= 30 && imc < 40){
    console.log('Voce está obeso!')
} else {
    console.log('Voce está em obesidade severa!')
}