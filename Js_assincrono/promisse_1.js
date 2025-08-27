/*
const number = 10;

const myPromise = new Promise((resolve,reject) => {

    setTimeout(() =>{
        if(typeof number === "number"){
            resolve(`Número ${number} é válido!`);
        } else {
            reject(`O valor ${number} não é um número!`);
        }
    }, 1000);
})

myPromise
.then((result) => {
    console.log(`Sucesso: ${result}`);
}) 
.catch((error) => {
    console.log(`Erro: ${error}`);
})
*/

const checkNumber = (n) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof n === "number"){
                resolve(`Número ${n} é válido!`);
            } else {
                reject(`O valor ${n} não é um número!`);
            }
        },2000) // encapsulamento de uma promise
     })
}

const a = checkNumber(10);
const b = checkNumber("10");

a
.then((result) => {
    console.log(`Sucesso: ${result}`);
})
.catch((error) => {
    console.log(`Erro: ${error}`);
});


b
.then((result) => {
    console.log(`Sucesso: ${result}`);
})
.catch((error) => {
    console.log(`Erro: ${error}`);
})