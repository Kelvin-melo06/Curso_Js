const cachorro = { // Definimos um objeto cachorro que servirá como protótipo
    raca: null
}

const pastorAlemao = Object.create(cachorro); // Criamos o objeto pastorAlemao que herda as propriedades de cachorro que é o protótipo dele
pastorAlemao.raca = "Pastor Alemão";

const pitbull = Object.create(cachorro); // Criamos o objeto pitbull que também herda as propriedades de cachorro pelo seu protótipo
pitbull.raca = "Pitbull";

console.log(pastorAlemao.raca); // Saída: Pastor Alemão
console.log(pitbull.raca); // Saída: Pitbull