const itensDaLista = document.getElementsByTagName('li');

for(const item of itensDaLista){
    item.style.cor = 'Red';
    item.textContent = `Texto do novo item ${item.textContent}`;
}

console.log(itensDaLista);