let primo = [2, 8, 10, 22, 50, 48];

for(let i = 0; i < primo.length; i++) {
    let ehprimo = true;

    if(primo[i] <= 1){
        ehprimo = false;
    }

    for(let j = 2; j < primo[i]; j++){
        if(primo[i] % j == 0){
            ehprimo = false;
            break;
        }
    }
    if(ehprimo){
        console.log(primo[i] + " é primo.");
    } else {
        console.log(primo[i] + " não é primo.");
    }   
}