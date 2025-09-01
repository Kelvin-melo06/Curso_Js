
const listaFrutas = document.getElementById("listaDeFrutas");
const itemReferencia = document.getElementById("referencia");

const novoLi = document.createElement("li");
novoLi.textContent = 'Abacaxi';

listaFrutas.insertBefore(novoLi, itemReferencia);



