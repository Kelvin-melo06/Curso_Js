let pessoas =[
    {nome: 'Kelvin', idade: 18, profissão: 'programador'},
    {nome: 'João', idade: 35, profissão: 'Desenvolvedor'},
    {nome: 'Marcelo', idade: 25, profissão: 'Jogador'},
    {nome: 'Henrique', idade: 40, profissão: 'DevOps'}
]

function filtrarPessoas(pesssoas){
   // Filtrar quem tem mais de 30 anos
   let mais_De_30 = pessoas.filter(pessoas => pessoas.idade > 30);
   
   // Acessando os objetos da array filtrada e modificando a propriedade profissão
   mais_De_30.forEach(pessoa => {
    pessoa.profissão = 'Desconhecida'
    console.log(`Nome: ${pessoa.nome}, Profissão: ${pessoa.profissão}`);
   })
}

console.log(filtrarPessoas(pessoas));