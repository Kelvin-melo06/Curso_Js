let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite um numero: "));

let soma = n1 + n2;
let diferenca = Math.abs(n1 - n2);
let produto = n1 * n2;
let divisao = n1 / n2;
let resto = n1 % n2

console.log(`A soma entre ${n1} e ${n2} é de ${soma}`);
console.log(`A diferença entre ${n1} e ${n2} é de ${diferenca}`);
console.log(`A divisão entre ${n1} e ${n2} é de ${divisao}`);
console.log(`O produto entre ${n1} e ${n2} é de ${produto}`);
console.log(`O resto entre ${n1} e ${n2} é de ${resto}`);
