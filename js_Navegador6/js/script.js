const lista = document.querySelector('ul');

// ------------------------REPLACECHILD-------------------------------------

const novoPrimeiroItem = document.createElement('li');
novoPrimeiroItem.textContent = 'Novo Primeiro Item';

const anteriorPrimeiroItem = document.getElementById('firstChild');

lista.replaceChild(novoPrimeiroItem, anteriorPrimeiroItem);

// ------------------------------------------------------------------------

//------------------------ APPENDCHILD --------------------------------------

const novoItem = document.createElement('li');
novoItem.textContent = 'Novo item adicionado';

lista.appendChild(novoItem);

// --------------------------------------------------------------------------

// ----------------------- INSERTBEFORE ------------------------------------ 

const novoItemInseridoAntesDoPrimeiro = document.createElement('li');
novoItemInseridoAntesDoPrimeiro.textContent = 'novoItemInseridoAntesDoPrimeiro';


lista.insertBefore(novoItemInseridoAntesDoPrimeiro, novoPrimeiroItem);

// --------------------------------------------------------------------------

