let numeros = [];

for(let i = 1; i <= 100; i++){
    numeros.push(i);
}


let primo = (numero) =>{
    if(numero <= 1){
        return false;
    }

    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;       
        }
    }
    return true; 
}

let numerosPrimos = numeros.filter(primo);
console.log(numerosPrimos);
