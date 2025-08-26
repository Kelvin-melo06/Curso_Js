/*
* Exercicio: Sistema de Gerenciamento de Personagens
*
* Descrição: Este programa simula um sistema de gerenciamento de personagens para um jogo,
* utilizando a Programação Orientada a Objetos (POO). A classe 'Personagem'
* serve como uma base para a criação de personagens, e a classe filha 'Guerreiro'
* estende essa base, adicionando novas propriedades e métodos especializados. O objetivo
* é demonstrar a herança de classes para o reaproveitamento de código e a
* criação de lógicas de métodos que interagem com o estado do objeto (como a vida) e
* que podem ser chamados em outras classes.
*/


class Personagem {
    constructor(nome,danoBase){
        this.nome = nome
        this.danoBase = danoBase
    }
    vida = 100;
    receberDano(danoRecebido){
        this.vida -= danoRecebido;
        if(this.vida <= 0){
            return `${this.nome} foi derrotado!`
        } else {
            return `${this.nome} agora tem ${this.vida} de vida.`
        }
    }
    atacar(personagemAlvo){
        return personagemAlvo.receberDano(this.danoBase);
    }
}

class Guerreiro extends Personagem{
    constructor(nome,danoBase,forca){
        super(nome,danoBase);
        this.forca = forca;
    }
    darGolpePoderoso(personagemAlvo){
        return personagemAlvo.receberDano(this.danoBase + this.forca);
    }
}

const zeus = new Personagem("Zeus",10); // DOIS PERSONAGENS
const hercules = new Personagem("Hercules",15);

const arus = new Guerreiro("Arus",20,30); // DOIS GUERREIROS
const valerio = new Guerreiro("Valerio",25,40);

console.log(zeus.atacar(hercules)); // Zeus ataca Hercules
console.log(hercules.atacar(zeus)); // Hercules ataca Zeus

console.log(arus.darGolpePoderoso(valerio)); // Arus usa golpe poderoso em Valerio
console.log(valerio.atacar(arus)); // Valerio ataca Arus
console.log(valerio.darGolpePoderoso(arus)); // Valerio usa golpe poderoso em Arus
