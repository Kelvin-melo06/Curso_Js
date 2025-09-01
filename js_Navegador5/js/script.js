
const lista = document.getElementById("listaDeFrutas");
const itemTrocado = lista.children[1];

const novoFilho = document.createElement("li");
novoFilho.textContent = 'Abacaxi';

lista.replaceChild(novoFilho, itemTrocado);