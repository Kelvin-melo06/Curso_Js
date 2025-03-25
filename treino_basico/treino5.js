let num = [];
num.push(1,2,5,7);

let first = num.at(0)
let add_End = num.push(9);
let last = num.at(-1)
let remove_first = num.slice(0, 1)

console.log(`O primeiro numero da Array ${num} é ${first}, o ultimo é ${last}, o Adicionado no final é ${add_End}, e o que removemos na primeira posição é ${remove_first}, e essa é a array final ${num}`);