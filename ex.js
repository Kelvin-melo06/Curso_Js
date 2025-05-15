let contar = (string) => {
    let i = 0;
    while(string[i] !== undefined) {
        i++;
    }
    return i;
}

console.log(contar("Hola mundo")); // 10