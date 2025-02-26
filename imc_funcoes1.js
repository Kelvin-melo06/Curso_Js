
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}//Função auxiliar que vão ser usadas na função principal


function classificacaoImc(imc){
    if(imc < 18.5){
        return 'Voce está abaixo do peso!';
    } else if(imc >= 18.5 && imc < 25){
        return 'Voce está no peso ideal!';
    } else if(imc >= 25 && imc < 30){
        return 'Voce está acima do peso!';
    } else if (imc >= 30 && imc < 40){
        return 'Voce está obeso!';
    } else {
        return 'Voce está em obesidade severa!';
    }
}//Função auxiliar que vão ser usadas na função principal

//Função main, principal, sendo uma função sem nome invocada imediatamente, pelos "() ()" ao redor dela
(function (){
    let peso = 20;
    let altura = 1.90;
    let imc = calcularImc(peso, altura); //Math é uma biblioteca de funções matématicas
    console.log(`Seu imc é de ${imc.toFixed(2)}, ${classificacaoImc(imc)}`);
})();



