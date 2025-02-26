let n1 = 7;
let n2 = 8;
let n3 = 8;

let media = (n1 + n2 + n3) / 3;
console.log(`Sua média é ${media.toFixed(2)}`);

if(n1, n2, n3 === 0){
    console.log('Notas invalidas!');
} else if(media < 5){
    console.log('Voce está reprovado!');
} else if(media >= 5 && media <= 7){
    console.log('Voce está em recuperação!');
} else{
    console.log('Voce passou de semestre!');
}
