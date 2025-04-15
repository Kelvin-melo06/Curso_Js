const numbers = [5, 3, 4, 1, 10, 8];
let i = 0

function gets(){
  let valores = numbers[i];
  i++;
  return valores;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};