function criarHandlerBotao(indiceBotao) {
   
    return function() {
       
        alert(`Você clicou no Botão ${indiceBotao}!`);
    };
}


const container = document.getElementById('container');
const botoes = container.getElementsByTagName('button');


for (let i = 0; i < botoes.length; i++) {
    
    const handler = criarHandlerBotao(i + 1);

    botoes[i].addEventListener('click', handler);
}