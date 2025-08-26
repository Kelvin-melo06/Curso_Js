package EX_POO_JAVA;
public class Moto extends Veiculo{
    String tipo;
    int cilindradas;

    public Moto(String marca, String modelo, int ano, String tipo, int cilindradas){
        super(marca,modelo,ano);
        this.tipo = tipo;
        this.cilindradas = cilindradas;
    }

    public void empinar(){
        System.out.println("A moto do modelo " + modelo + " do ano " + ano + "está empinando!");
    }
}