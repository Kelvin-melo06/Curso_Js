let number = 0;
let number_Divisivel_Por_5 = (number % 5) === 0

if(number === 0){
    console.log('O número digitado é invalido!');
} else if(number_Divisivel_Por_5){
    console.log(`O número ${number} é divisível por 5`);
} else{
    console.log(`O número ${number} não é divisível por 5`);
}