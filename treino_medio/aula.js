class Pessoa {
    name;
    age;
    year_of_born;

    
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.year_of_born = new Date().getFullYear() - age;
    }
    

    descrever(){
        console.log(`Meu nome é ${this.name} tenho ${this.age} e nasci em ${this.year_of_born}`);
    }
}

function comparando_pessoas(p1, p2){ //Função recebendo objetos como parametros
    if(p1.age > p2.age){
        console.log(`${p1.name} é mais velho que ${p2.name}`)
    } else if(p2.age > p1.age){
        console.log(`${p2.name} é mais velho que ${p1.name}`)
    } else{
        console.log(`${p1.name} e ${p2.name} tem a mesma idade!`)
    }
}

const Kelvin = new Pessoa('Kelvin', 18);
const Laura = new Pessoa('Laura', 18); 

comparando_pessoas(Kelvin, Laura);























/*

const pessoa =  {
   name: 'Kelvin',
   age: 18, // Objeto é uma  coleçõo de dados dinamica

   descrever: function (){
    console.log(`Meu nome é ${this.name} e minha idade é ${this.age} `)
   }
};

console.log(pessoa['name']);

*/

/* 

kelvin.altura = 157;
delete kelvin.altura; // Comando para deletar algo que estiver dentro do objeto

console.log(pessoa['name']); ACESSO DINAMICO, O [] É ONDE COLOCAMOS O NOME DO ATRIBUTO
console.log(pessoa.name); ACESSO DIRETO NO OBJETO

*/


