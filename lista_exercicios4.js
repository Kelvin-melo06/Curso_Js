let preco_etiqueta = 6.499;
let tipo_pagamento = 'Débito';

if(tipo_pagamento === 'Débito'){
    let desconto_debito = preco_etiqueta - (preco_etiqueta * 0.10)
    console.log(desconto_debito.toFixed(3));
} else if(tipo_pagamento === "Dinheiro" || tipo_pagamento === "Pix"){
   let desconto_dinheiro_pix = preco_etiqueta - (preco_etiqueta * 0.15)
   console.log(desconto_dinheiro_pix.toFixed(3));
}  else if(tipo_pagamento === 'Duas vezes'){
   console.log(preco_etiqueta);
} else if(tipo_pagamento === 'Acima de duas vezes'){
    let duasVezes_juros = preco_etiqueta + (preco_etiqueta * 0.10)
    console.log(duasVezes_juros.toFixed(3));
}
