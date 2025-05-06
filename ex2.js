let paresIntervalo = (n1, n2) => {
    for(let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
            console.log(`${i} é par`);        
        }
    }
}

paresIntervalo(1, 10);