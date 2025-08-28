const promessaUsuario = new Promise((resolve) => {
    setTimeout(() => {
        resolve({nome: "Kelvin", idade: 30});
    },1000)
})

const promessaPost = new Promise((resolve) => {
    setTimeout(() => {
        resolve(["Post 1", "Post 2"]);
    },2000)
})

const promessaComentários = new Promise((resolve) => {
    setTimeout(() => {
        resolve(["Comentário 1", "Comentário 2"]);
    },1500)
})

Promise.all([promessaUsuario, promessaPost, promessaComentários])
.then((resultados) => {
    const[usuario, post, comentarios] = resultados;
    console.log("Todas as operações concluídas!");
    console.log(`Usuário: ${usuario.nome}`);
    console.log(`Posts: ${post.length}`);
    console.log(`Comentarios: ${comentarios.length}`);
})
.catch((error) => {
    console.log(`Erro em uma das promessas: ${error}`);
})
.finally(() => {
    console.log("Processo de consulta finalizado!");
})

console.log("As promessa estão sendo executadas em paralelo....");