const inputTarefa = document.getElementById('novaTarefaInput');
const botaoAdicionar = document.getElementById('adicionarBtn');
const listaDeTarefas = document.getElementById('listaDeTarefas');

botaoAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa(){
    const textoTarefa = inputTarefa.value;

    if(textoTarefa.trim() !== ''){
        const novoItem = document.createElement('li');
        const spanTexto = document.createElement('span');
        const botaoRemover = document.createElement('button');
        listaDeTarefas.appendChild(novoItem);
        novoItem.appendChild(spanTexto);
        novoItem.appendChild(botaoRemover);

        spanTexto.textContent = textoTarefa;
        botaoRemover.textContent = 'Remover';

        botaoRemover.addEventListener('click', (e) =>{
            e.target.parentNode.remove();
        })

        inputTarefa.value = '';
    }
}