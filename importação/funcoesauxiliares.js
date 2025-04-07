const valoresEntrada = [5,50,19,98,23];
let i = 0;

function gets(){
    let valor = valoresEntrada[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print} // Aqui nós estamos exportando a função gets e a função print para o nosso arquivo main