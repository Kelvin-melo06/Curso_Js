const entrada = [7.5, 5.5, 4.5, 8.5];
let i = 0;

function gets(){
    let valor = entrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};