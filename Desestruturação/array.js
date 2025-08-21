const myList = ['Maçã', 'Banana', 'Laranja', 'Uva'];

const [first, second, third, fourth] = myList;

const newList = [... myList, 'Pera', 'Manga'];

const [newFirst, newSecond, ...rest] = newList; // Desestruturação com o operador "spread"

console.log(first);  // Saída: Maçã
console.log(second); // Saída: Banana
console.log(third);  // Saída: Laranja
console.log(fourth); // Saída: Uva
console.log(newFirst);  // Saída: Maçã
console.log(newSecond); // Saída: Banana
console.log(rest);  // Saída: [ 'Laranja', 'Uva', 'Pera', 'Manga' ]