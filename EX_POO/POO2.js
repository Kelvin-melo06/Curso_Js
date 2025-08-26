/*
* Exercicio: Sistema de Gerenciamento de Livros
*
* Descrição: Este programa simula um sistema de controle de inventário para
* uma biblioteca virtual. A classe 'Livro' gerencia o estado de um livro
* através da propriedade 'disponivel'. Os métodos 'emprestar()' e 'devolver()'
* controlam e validam a mudança desse estado, demonstrando o conceito de
* encapsulamento e a importância de métodos para manipular as propriedades
* de um objeto de forma segura e controlada.
*/


class Livro{
    constructor(titulo,autor){
        this.titulo = titulo;
        this.autor = autor;
    }
    disponivel = true;
    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            console.log(`O livro ${this.titulo} foi emprestado com sucesso!`);
        }
    }
    devolver(){
        if(!this.disponivel){
            this.disponivel = true;
            console.log(`O livro ${this.titulo} foi devolvido com sucesso!`);
        }
    }
}

const livro1 = new Livro("JavaScript","Gustavo Guanabara");
console.log(livro1);
livro1.emprestar();
livro1.devolver();