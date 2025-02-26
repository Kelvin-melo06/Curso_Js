function tipo_pagamento(pagamento, preco_etiqueta){
    if(pagamento === 'Débito'){
        let desconto_debito = preco_etiqueta - (preco_etiqueta * 0.10)
        return (desconto_debito.toFixed(3));
    } else if(pagamento === "Dinheiro" || tipo_pagamento === "Pix"){
       let desconto_dinheiro_pix = preco_etiqueta - (preco_etiqueta * 0.15)
        return (desconto_dinheiro_pix.toFixed(3));
    }  else if(pagamento === 'Duas vezes'){
        return (preco_etiqueta);
    }  else if(pagamento === 'Acima de duas vezes'){
        let duasVezes_juros = preco_etiqueta + (preco_etiqueta * 0.10)
        return (duasVezes_juros.toFixed(3));
    }
}

function main(){
    let preco_etiqueta = 6.499;
    let tipo_De_Pagamento = tipo_pagamento('Débito', preco_etiqueta);
    console.log(`${tipo_De_Pagamento}`);
}

main();






