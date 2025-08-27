const promessa1 = new Promise(resolve => setTimeout(() => resolve('Resultado da Promessa 1'), 1000));
const promessa2 = new Promise(resolve => setTimeout(() => resolve('Resultado da Promessa 2'), 2000));

Promise.all([promessa1, promessa2])
    .then(resultados => {
        console.log('Todas as promessas foram concluídas!');
        console.log(resultados); // Saída: ['Resultado da Promessa 1', 'Resultado da Promessa 2']
    })
    .catch(erro => {
        console.log('Alguma promessa falhou:', erro);
    });

console.log('Aguardando todas as promessas...');

// Promise.all é usado para aguardar a conclusão de múltiplas promessas. Ele retorna uma nova promessa que é resolvida quando todas as promessas no array são resolvidas, ou rejeitada se qualquer uma das promessas for rejeitada. No exemplo acima, esperamos que duas promessas sejam concluídas antes de prosseguir.