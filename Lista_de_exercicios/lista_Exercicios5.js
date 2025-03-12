/*


Crie uma class para representar carros.
Os carros possuem uma marca, uma cor, e um gasto medio de combustivel por km rodado
Crie um metodo que dado a quantidade de km e o preço do combustivel nos de o valor gasto em reias para realizar o percurso


*/

class Carro{
    marca;
    color;
    gasto_Medio_Combustivel;

    constructor(marca, color, gasto_Medio_Combustivel){
       this.marca = marca;
       this.color = color;
       this.gasto_Medio_Combustivel = gasto_Medio_Combustivel;
    }

    valor_gasto(quantidade_km, preco_combustivel){
      let valor_Em_Reais = (quantidade_km / this.gasto_Medio_Combustivel) * preco_combustivel;
      return valor_Em_Reais; 
    }
}

const Toyota = new Carro('Toyota', 'Branco', 10);
let dinheiro_gasto_toyota = Toyota.valor_gasto(30, 8.28);
console.log(`Com seu ${Toyota.marca} da cor ${Toyota.color} tendo o gasto medio de combustivel de ${Toyota.gasto_Medio_Combustivel} km/l, o valor gasto em reias da sua viagem ficou em ${dinheiro_gasto_toyota.toFixed(2)} reais`);