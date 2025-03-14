/*

.FILTER() METODO USADO PARA CRIAR UMA NOVA ARRAY COM BASE EM UMA CONDIÇÃO DEFINIDA NA CALLBACK


let numeros = [5, 12, 8, 130, 44];

let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez)

*/




/* 

.MAP() ELE CRIA UMA NOVA ARRAY PEGANDO OS ELEMENTOS DA ARRAY ORIGINAL E TRANFORMANDO SEUS VALORES USANDO UMA CALLBACK


let numeros = [1, 2, 3, 4];

let dobro = numeros.map(num => num * 2);
console.log(dobro);

*/





/*

.REDUCE() ELE PEGA TODOS OS ELEMENTOS DE UMA ARRAY E RETORNA UM UNICO VALOR COM UM CALLBACK, METODO USADO PARA SOMA E CONCATENAÇÃO


let numeros = [1,7,8,2,4];
let soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(`A soma de ${numeros} é ${soma}`);


*/