let aluno = {
    nome: "Leonardo",
    notas: [10, 9, 8]
}

let notaFinal = (aluno) => {
   let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
         soma += aluno.notas[i];
    }
    let media = soma / aluno.notas.length;

    if(media >= 7) {
        console.log("Aprovado com média: " + media);
    } else{
        console.log("Reprovado com média: " + media);
    }
    return media;
}

console.log(notaFinal(aluno));

