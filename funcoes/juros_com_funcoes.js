/*

 Condição pagamento:
 Á vista Débito, recebe 10% de desconto;
 Á vista no Dinheiro ou Pix, recebbe 15% de desconto;
 Em duas vezes, preço norma de etiqueta;
 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/



function tipo_pagamento(pagamento, preco_etiqueta){
    if(pagamento === 'Débito'){
        let desconto_debito = preco_etiqueta - (preco_etiqueta * 0.10)
        return (desconto_debito.toFixed(3));
    } else if(pagamento === "Dinheiro" || pagamento === "Pix"){
       let desconto_dinheiro_pix = preco_etiqueta - (preco_etiqueta * 0.15)
        return (desconto_dinheiro_pix.toFixed(3));
    }  else if(pagamento === 'Duas vezes'){
        return (preco_etiqueta);
    }  else if(pagamento === 'Acima de duas vezes'){
        let duasVezes_juros = preco_etiqueta + (preco_etiqueta * 0.10)
        return (duasVezes_juros.toFixed(3));
    }
}

(function(){
    let preco_etiqueta = 6.499;
    let pagamento_tipo = 'Dinheiro';
    let condicao_De_Pagamento = tipo_pagamento(pagamento_tipo, preco_etiqueta);
    console.log(`No ${pagamento_tipo} o valor final fica ${condicao_De_Pagamento} Reais`);
}());