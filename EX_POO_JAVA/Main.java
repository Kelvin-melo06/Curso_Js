package EX_POO_JAVA;
public class Main{
    public static void main(String[] args){
        Carro carro1 = new Carro("Toyota", "Corolla", 2020, "Prata", 4);
        carro1.apresentar();
        carro1.ligar();
        System.out.println("--------------");

        Moto moto1 = new Moto("Honda", "CB 500", 2019, "Esportiva", 500);
        moto1.apresentar();
        moto1.empinar();
        System.out.println("--------------");

        Veiculo veiculo1 = new Veiculo("Ford", "Fiesta", 2018);
        veiculo1.apresentar();
        System.out.println("--------------");   

    }
}