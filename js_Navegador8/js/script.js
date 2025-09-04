const cards = document.querySelectorAll('.card');

let contador = 1;
for(const card of cards){
    const titulo = document.querySelector('h2');
    titulo.style.cor = 'darkblue';

    card.classList.add('destaque-azul');
    card.setAttribute('data-ordem', contador);
    contador++;
}