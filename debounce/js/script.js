function debounce(funcOriginal, delay){
    let time;

    return(...rest) =>{
        clearTimeout(time);

        time = setTimeout(()=>{
            funcOriginal.apply(this, rest);
        }, delay);
    };
}

const barraDePesquisa = document.querySelector('#barra-de-pesquisa');

function fazerBusca(termo){
    console.log(`Buscando por : ${termo}`);
}

const versaoDebounce = debounce(fazerBusca, 500);

barraDePesquisa.addEventListener('input', (e)=>{
   versaoDebounce(e.target.value);
})