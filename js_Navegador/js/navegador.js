const meuFormulario = document.getElementById('meuFormulario');
const titulo = document.querySelector('h1');
const body = document.body;

console.log(`O titulo da página é:${titulo.textContent}`);

const novoLabel = document.createElement('label');
const novoInput = document.createElement('input');
const novoBotao = document.createElement('button');

novoLabel.textContent = 'E-mail: ';
novoLabel.setAttribute('for', 'emailInput');

novoInput.setAttribute('type', 'email');
novoInput.setAttribute('id', 'emailId');
novoInput.setAttribute('name', 'emailName');
novoInput.setAttribute('placeholder', 'Digite seu e-mail');
novoInput.required = true;

novoBotao.setAttribute('type', 'submit');
novoBotao.textContent = 'Enviar';

meuFormulario.appendChild(novoLabel);
meuFormulario.appendChild(novoInput);
meuFormulario.appendChild(novoBotao);


novoBotao.addEventListener('click', (e) => {
    const emailValor = document.getElementById('emailId').value;
    const nomeValor = document.getElementById('nome').value;

    if(emailValor && nomeValor){
        alert(`Obrigado, ${nomeValor}! Seu e-mail: ${emailValor} foi enviado com sucesso!`);
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
        e.preventDefault(); // Impede o envio do formulário se os campos não estiverem preenchidos
    }
})

body.style.backgroundColor = '#f0f0f0';
body.style.fontFamily = 'Arial, sans-serif';