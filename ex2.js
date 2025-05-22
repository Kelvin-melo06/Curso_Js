
let iniciaisNome = (str) =>{
    return str.split(" ").map((n) => n[0].toUpperCase()).join(".");
}


console.log(iniciaisNome("Lucas Silva"));


/*
function fn(x){
    let y = x.toLowerCase();
    let z = y.trim();
    return z[0];
}

console.log(fn("Lucas Silva"));
*/