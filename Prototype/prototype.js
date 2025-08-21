const text = 'aasadsas';

console.log(Object.getPrototypeOf(text)); // Mostra o protótipo do objeto String

const myFirstObject = {
    a: "b"
}

const mySecondObject = Object.create(myFirstObject); // Cria um novo objeto com myObject como protótipo e assim herda suas propriedades

// mySecondObject.a = "c"; // Define uma nova propriedade 'a' no objeto mySecondObject

// console.log(mySecondObject.a); // Acessa a propriedade 'a' do objeto mySecondObject


console.log(mySecondObject.a); // Acessa a propriedade 'a' do protótipo "myObject"