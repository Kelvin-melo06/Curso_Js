let iniciaisNome = (str) =>{
    return str.split(" ").map((n) => n[0].toUpperCase()).join(".");
}


console.log(iniciaisNome("Lucas Silva"));