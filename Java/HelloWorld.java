public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Exercício de combustivel");

    double distancia = 0;
    double litros = 0;
    double consumo = 0;

    System.out.println("Digite a distância percorrida");
    distancia = Double.parseDouble(System.console().readLine());
    System.out.println("Digite a quantidade de litros de combustível gastos");
    litros = Double.parseDouble(System.console().readLine());

    consumo = distancia / litros;

    System.out.printf("consumo: %.3f km/l", consumo);
  }
}
