const lista_Numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


for (let i = 0; i < lista_Numeros.length; i++) {
    if(lista_Numeros[i] % 2 === 0){
        console.log(`numeros par: ${lista_Numeros[i]}`);
    } else{
        console.log(`numero impar: ${lista_Numeros[i]}`);
    }
}