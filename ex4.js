let impar = (num) => {
    if(num % 2 === 0) {
        return false;
    }else{
        return true;
    }
}

let numerosImparesIntervalo = (inicio, fim, filtro) => {
    for(let i = inicio; i <= fim; i++){
        if(filtro(i)){
            console.log(i);
    }
}
}
numerosImparesIntervalo(1, 10, impar); // 1, 3, 5, 7, 9