function buscarUsuario(id){
    return new Promise((resolve, reject) => {
        if(id == 1){
            resolve({id: 1, nome: "Kelvin", idade: 30});
        } else{
            reject("Usuário não encontrado!");
        }
    },2000);
}

console.log("Iniciando busca de usuário...");

buscarUsuario(1)
.then((usuario) =>{
    console.log("Sucesso no then, Usuário encontrado:");
    console.log(`ID: ${usuario.id}, Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
})
.catch((error) => {
    console.log("Erro no catch:");
    console.log(`Erro: ${error}`);  
})