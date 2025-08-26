/*
* Exercicio: Sistema de Gerenciamento de Produtos
*
* Descrição: Este programa foi criado para simular o sistema de inventário de uma
* loja, que vende tanto produtos físicos quanto digitais. A classe-pai 'Produto'
* define características em comum como nome e preço. As classes filhas
* 'ProdutoFisico' e 'ProdutoDigital' herdam essa base e adicionam suas
* próprias características e métodos, como o cálculo de frete para produtos físicos
* e o método de download para produtos digitais. O objetivo é demonstrar a
* herança de classes para o reaproveitamento de código e a especialização de
* objetos em um contexto de POO.
*/


class Produto{
    constructor(nome,preco){
        this.nome = nome;
        this.preco = preco;
    }
    disponivel = true;
}

class ProdutoFisico extends Produto{
    constructor(nome,preco,peso){
        super(nome,preco);
        this.peso = peso;
    }
    calcularFrete(){
        return this.peso * 0.5;
    }
}

class ProdutoDigital extends Produto{
    constructor(nome,preco,tamanhoArquivo){
        super(nome,preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }
    download(){
        this.disponivel = false;
        return `Inciando o download do produto ${this.nome}...`;
    }
}

const meuLivro = new ProdutoFisico('JavaScript', 29.90, 0.5);
console.log(meuLivro);
const frete = meuLivro.calcularFrete();
console.log(`Frete: R$${frete.toFixed(2)}`);

const meuEbook = new ProdutoDigital('Ebook de JavaScript', 19.90, '2MB');
console.log(meuEbook);
const download = meuEbook.download();
console.log(download);