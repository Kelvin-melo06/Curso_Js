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