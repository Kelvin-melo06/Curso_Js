let quantidadeLetrasA = (str) =>{
    let contador = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === 'a' || str[i] === 'A'){
            contador++;
        }
    }
    return contador;
}

console.log(quantidadeLetrasA("A casa é amarela")); // 4
