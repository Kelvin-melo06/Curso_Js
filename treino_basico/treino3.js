let num = Number(prompt("Digite um numero: "));

if(num % 2 === 0){
    console.log(`${num} é Par!`);
} else{
    console.log(`${num} é Impar!`);
}

if(num > 0){
  console.log(`${num} é positivo!`)
} else if(num === 0){
    console.log(`${num} é 0!`)
} else{
    console.log(`${num} é negativo!`)
}