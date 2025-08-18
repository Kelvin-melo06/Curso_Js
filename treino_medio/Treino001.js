let aluno = {
  nome: "Leonardo",
  notas: [10, 9, 8],
};

let notaFinal = (aluno) => {
  let soma = aluno.notas.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);
  let media = soma / aluno.notas.length;

  if (media >= 7) {
    console.log("Aprovado com média: " + media);
  } else {
    console.log("Reprovado com média: " + media);
  }
  return media;
};

console.log(notaFinal(aluno));
