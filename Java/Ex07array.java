import java.util.Scanner;

public class Ex07array {
  public static void main(String[] args) {

    Scanner Leitor = new Scanner(System.in);

    String nome;
    String cpf;
    String cep;
    String[] lista = new String[1];

    for (int i = 0; i < lista.length; i++) {
      System.out.println("Insira seu nome : ");
      nome = Leitor.next();

      System.out.println("Insira Seu cpf");
      cpf = Leitor.next();

      System.out.println("Insira Seu cep");
      cep = Leitor.next();

      lista[i] = String.format("Nome: %s; CPF: %s; CEP: %s;", nome, cpf, cep);
    }
    System.out.println("--- Lista de cadastros: ---");

    for (String element : lista) {
      System.out.println(element.replaceAll("[.-]", "") + " ");
    }
  }
}