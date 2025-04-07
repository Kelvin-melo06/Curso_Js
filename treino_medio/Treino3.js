let notas = [
    {nome: "Kelvin", nota: 8},
    {nome: "Luis", nota: 7},
    {nome: "Maranhão", nota: 9},
    {nome: "Paraiba", nota: 5},
    {nome: "Lenha", nota: 2}
]

notas.forEach(alunos => {
  if(alunos.nota >= 7){
    console.log(`${alunos.nome} foi aprovado com ${alunos.nota}`);
  }else {
    console.log(`${alunos.nome} foi reprovado com ${alunos.nota}`);
  }
});

let soma = 0;

notas.forEach(alunos => {
    soma += alunos.nota;
})

let media = soma / notas.length;

console.log(`A media da turma ficou ${media}`);
