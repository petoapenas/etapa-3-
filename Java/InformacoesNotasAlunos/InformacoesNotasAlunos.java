package InformacoesNotasAlunos;

public class InformacoesNotasAlunos {

  private static double BuscarMaiorNota(double[] notas) {
    double maiorNota = 0;
    for (int i = 0; i < notas.length; i++) {
      if (notas[i] > maiorNota) {
        maiorNota = notas[i];
      }

    }
    return maiorNota;
  }

  private static double BuscarMenorNota(double[] notas) {
    double menorNota = 10;
    for (int i = 0; i < notas.length; i++) {
      if (notas[i] < menorNota) {
        menorNota = notas[i];
      }
    }
    return menorNota;
  }

  private static double BuscarMedia(double[] notas) {
    double somaDasNotas = 0;
    for (int i = 0; i < notas.length; i++) {
      somaDasNotas = somaDasNotas + notas[i];
    }
    return somaDasNotas / notas.length;
  }

  public static void main(String args[]) {
    double[] notas = { 10, 9, 8, 7, 6, 5, 4, 3 };
    double maiorNota = BuscarMaiorNota(notas);
    double menorNota = BuscarMenorNota(notas);
    double mediaDasNotas = BuscarMedia(notas);

    System.out.println("Maior nota: " + maiorNota);
    System.out.println("Menor nota: " + menorNota);
    System.out.println("Nota media: " + mediaDasNotas);
  }
}
