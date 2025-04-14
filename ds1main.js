const {gets, print} = require('./dsf1auxiliar');
const notas = [];

while(true){
    let nota = gets();
    if(nota == undefined){
        break;
    }
    notas.push(nota);
}


const media_Aluno = (n) =>{
    let soma = 0;
    for(let i = 0; i < n.length; i++){
        soma += n[i];
    }
    return soma / n.length;
}

const media = media_Aluno(notas);

if(media < 5){
    print("Reprovado!")
} else if(media >= 5 && media < 7){
    print("Recuperação!")
} else{
    print("Aprovado!")
}

print(media_Aluno(notas));