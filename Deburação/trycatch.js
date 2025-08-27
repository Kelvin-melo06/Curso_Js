try{
    const soma = 10 + x;
} catch(error){
    console.log(`Erro: ${error}`);
}

// o bloco try tenta executar o código dentro dele, se ocorrer um erro, o bloco catch captura esse erro e executa o código dentro dele, permitindo tratar o erro de forma adequada sem interromper a execução do programa.

// --------------------------------------------------

const dividir =(...numeros)=>{
    if(numeros.length !== 2){
        throw new Error("É necessário fornecer exatamente dois números para divisão.");
    }
    if(numeros[1] === 0){
        throw new Error("Divisão por zero não é permitida."); // lançando um erro personalizado
    }
    return numeros[0] / numeros[1];
}

try{
    dividir(10,0); // chamando a função com um valor que causa erro
} catch(error){
    console.log(`Erro: ${error.message}`);
} finally{
    console.log("Execução finalizada.");
}