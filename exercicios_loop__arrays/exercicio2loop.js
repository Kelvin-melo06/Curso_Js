const lista_Numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


for (let i = 0; i < lista_Numeros.length; i++) {
    if(lista_Numeros[i] % 2 === 0){
        console.log(`numeros pares: ${lista_Numeros[i]}`);
    }
}


  const numerosPares = [];
   for (let i = 0; i < 10; i++) { 
    const numeroPar = i % 2 === 0;
     if (numeroPar) { 
        numerosPares.push(i); 
    } } console.log(numerosPares); 

     const numeros = []; 
     for (let i = 0; i < 10; i++){ 
        numeros.push(i); 
    } console.log(numeros); 