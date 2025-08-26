package EX_POO_JAVA;
public class Veiculo{
    String marca;
    String modelo;
    int ano;

    public Veiculo(String marca, String modelo, int ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    public void apresentar(){
        System.out.println("Marca: " + marca + ", Modelo: " + modelo + ",Ano: " + ano);
    }
}