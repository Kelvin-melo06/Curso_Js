const lista = document.querySelector('#minhaLista');
const itensLista = document.querySelectorAll('.itemLista');
const btn = document.querySelector('#botao');

let corAtual = 'clara';

btn.addEventListener('click', () => {
    if(corAtual === 'clara'){
        for(const item of itensLista){
            item.classList.add('destaque');
        }
        corAtual = 'escura';
    } else{
        for(const item of itensLista){
            item.classList.remove('destaque');
        }
        corAtual = 'clara';
    }
})