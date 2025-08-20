const testePadStart = '1';
const newNumber = testePadStart.padStart(4, '0'); // Adds leading zeros to make the string length 4

console.log(newNumber); // Output: "0001"
console.log(testePadStart);

// --------------------------------------------------------------------------

const testePadEnd = '1';
const newNumberEnd = testePadEnd.padEnd(10, '0'); // Adds trailing zeros to make the string length 10

console.log(newNumberEnd); // Output: "1000000000"
console.log(testePadEnd);

// --------------------------------------------------------------------------

const itensParaComprar = ['Arroz', 'Feijão', 'Macarrão', 'Carne'];
const fraseDeCompra = `Hoje eu vou comprar ${itensParaComprar.join(', ')}.`; // Joins the array into a string with commas

console.log(fraseDeCompra); // Output: "Hoje eu vou comprar Arroz, Feijão, Macarrão, Carne."
console.log(itensParaComprar);

// --------------------------------------------------------------------------

const palavra = 'JavaScript ';
console.log(palavra.repeat(5)); // Repeats the string 5 times