const myJson = '{"nome": "Kelvin", "idade": 25, "cidade": "Sp", "skills":["JavaScript", "Python", "Java"]}'; // String JSON
console.log(myJson);

const objetoJavascript = JSON.parse(myJson); // Convertendo JSON para Objeto JavaScript

objetoJavascript.email = "joaosilva@gmail.com"; // Adicionando nova propriedade ao objeto

const myNewJson = JSON.stringify(objetoJavascript); // Convertendo Objeto JavaScript para JSON
