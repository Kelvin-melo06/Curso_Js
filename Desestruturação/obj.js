const userDetails = {
    nome: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: '10001'
    }
}

const { nome, age, address: { street, city, zip } } = userDetails;

console.log(`Name: ${nome}`);
console.log(`Age: ${age}`);
console.log(`Street: ${street}`);
console.log(`City: ${city}`);
console.log(`Zip Code: ${zip}`);