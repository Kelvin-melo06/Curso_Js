// Sobre Objetos, herança, instancia de classes

const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object); // "instanceof" verifica se obj é uma instância de Object

const obj2 = {
    c: [],
}

Object.assign(obj2, obj); // "Object.assign" copia as propriedades de obj para obj2

Object.keys(obj2); // "Object.keys" retorna um array com as chaves do objeto
Object.keys(obj);

Object.entries(obj2); // "Object.entries" retorna um array de pares [chave, valor] do objeto
Object.entries(obj);

