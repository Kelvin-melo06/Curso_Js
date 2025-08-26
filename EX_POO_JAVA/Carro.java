package EX_POO_JAVA;
public class Carro extends Veiculo {
    String cor;
    int portas;

    public Carro(String marca, String modelo, int ano, String cor, int portas){
        super(marca,modelo,ano);
        this.cor = cor;
        this.portas = portas;
    }

    public void ligar(){
        System.out.println("O carro do modelo " + modelo + " está ligando...");
    }
}