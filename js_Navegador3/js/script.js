const dadosFotos = [{
    url: 'imgs/pexels-didsss-1707581.jpg',
    legenda: 'Texto Foto 1'
},
{
    url: 'imgs/pexels-niezam-16516.jpg',
    legenda: 'Texto da Foto 2'
},
{
    url: 'imgs/pexels-pixabay-163077.jpg',
    legenda: 'Texto da Foto 3'
},
{
    url: 'imgs/pexels-pixabay-264905.jpg',
    legenda: 'Texto da Foto 4'
},
{
    url: 'imgs/pexels-thatguycraig000-3411134.jpg',
    legenda: 'Texto da Foto 5'
}
];

const galeriaDeFotos = document.getElementById('galeria-fotos');

dadosFotos.forEach((fotos) => {
    const containerFotos = document.createElement('div');
    const img = document.createElement('img');
    const pLegenda = document.createElement('p');

    img.src = fotos.url;
    pLegenda.textContent = fotos.legenda;
    
    containerFotos.appendChild(img);
    containerFotos.appendChild(pLegenda);

    galeriaDeFotos.appendChild(containerFotos);

    img.classList.add('estilo-imgs-galeria');
    galeriaDeFotos.classList.add('container-galeria')
})

