let contarVogais = (palavra) => {
    let contador = 0;
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if ('aeiou'.includes(palavra[i])) {
            contador++;
        }
    }

    console.log(`A frase contém ${contador} vogais.`);
}
