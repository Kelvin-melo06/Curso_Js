let preco_Etanol = 4.13;
let preco_Gasolina = 6.14;
let tipo_Combustivel = 'Gasolina';
let combustivel_Por_Km = 10;
let distancia_Viagem = 50;
let combustivel_gasto_total = distancia_Viagem / combustivel_Por_Km

if(tipo_Combustivel === 'Gasolina'){
  let valor_Viagem_Gasolina = combustivel_gasto_total * preco_Gasolina
  console.log(`O valor da viagem em um distancia percorrida de ${distancia_Viagem} Km foi de ${valor_Viagem_Gasolina}`)
} else if(tipo_Combustivel === 'Etanol'){
    let valor_Viagem_Etanol = combustivel_Por_Km * preco_Gasolina
    onsole.log(`O valor da viagem em um distancia percorrida de ${distancia_Viagem} Km foi de ${valor_Viagem_Etanol}`)
}


// O operador ternario começa com uma condição e depois essa condição vai ser testada, se for true(1) executa o primeiro comando se for false(0) segundo comando, que no caso muda o preço do combustível! Com isso não precisariamos usar if and else