function buscarUsuario(id){
   return new Promise((resolve, reject) => {
    if(id === 1){
        resolve({id: 1, nome: "Kelvin", idade: 30});
    } else{
        reject("Usuário não encontrado!");
    }
   }, 2000);
}

async function exibirUsuario(id){
    try{
        const usuário = await buscarUsuario(id);
        console.log("Busca concluída!");
        console.log(`Usuário: ${usuário.nome}, Idade: ${usuário.idade}`);
    } catch (error){
        console.log(`Erro: ${error}`);
    }
}

exibirUsuario(1);
exibirUsuario(2);