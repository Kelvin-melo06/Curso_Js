let pessoas =[
 {nome: 'Kelvin', idade: 18, profissão: 'programador'},
 {nome: 'João', idade: 35, profissão: 'Desenvolvedor'},
 {nome: 'Marcelo', idade: 25, profissão: 'Jogador'},
 {nome: 'Henrique', idade: 40, profissão: 'DevOps'}
];

function filtrarEAtualizarPessoas(pesssoas){
    // Usamos map para criar uma NOVA array de NOVOS objetos
    let pessoasAtualizadas = pessoas.map(pessoa => {
        // Se a pessoa tiver mais de 30 anos, criamos uma cópia do objeto
        // e alteramos a profissão. Caso contrário, mantemos o objeto original.
        if (pessoa.idade > 30) {
            return {
                ...pessoa, // Sintaxe 'spread' para copiar todas as propriedades
                profissão: 'Desconhecida'
            };
        }
        return pessoa;
    });

    return pessoasAtualizadas;
}

const novaListaDePessoas = filtrarEAtualizarPessoas(pessoas);

// A array original 'pessoas' NÃO FOI ALTERADA
console.log(pessoas);

// A nova array 'novaListaDePessoas' TEM OS OBJETOS ALTERADOS
console.log(novaListaDePessoas);