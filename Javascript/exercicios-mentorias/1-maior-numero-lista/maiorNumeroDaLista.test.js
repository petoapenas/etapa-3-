const { buscaMaiorValor } = require("./maiorNumeroDaLista");

describe("dada uma função `buscaMaiorValor`", () => {
  describe("quando passado um array com números", () => {
    it("deve retornar o maior número", () => {
      const lista = [1, 2, 3, 4, 5, 3, 8, 3];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(8);
    });
  });

  describe("quando passado um array com números negativos", () => {
    it("deve retornar o maior número", () => {
      const lista = [-1, -2, -3, -4, -5, -3, -8, -3];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(-1);
    });
  });

  describe("quando passado um array vazio", () => {
    it("deve retornar `undefined`", () => {
      const lista = [];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(undefined);
    });
  });

  describe("quando passado um array com um único número", () => {
    it("deve retornar o mesmo número", () => {
      const lista = [1];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(1);
    });
  });

  describe("quando passado um array com números repetidos", () => {
    it("deve retornar o primeiro número", () => {
      const lista = [1, 1, 1, 1, 1, 1, 1, 1];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(1);
    });
  });

  describe("quando passado um array com números decimais", () => {
    it("deve retornar o maior número", () => {
      const lista = [1.1, 1.2, 1.3, 1.4, 1.5, 1.3, 1.8, 1.3];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(1.8);
    });
  });

  describe("quando passado um array com valores não numéricos", () => {
    it("deve retornar o maior número", () => {
      const lista = [1, 2, 3, 4, 5, 3, 8, 3, "a", "b", "c"];
      const maior = buscaMaiorValor(lista);
      expect(maior).toBe(8);
    });
  });

  // describe("quando passado um array somente com valores não numéricos", () => {
  //   it("deve retornar `undefined`", () => {
  //     const lista = ["a", "b", "c"];
  //     const maior = buscaMaiorValor(lista);
  //     expect(maior).toBe(undefined);
  //   });
  // });

  // describe("quando passado um array com o primeiro valor não numérico", () => {
  //   it("deve retornar o maior número", () => {
  //     const lista = ["a", 1, 2, 3, 4, 5, 3, 8, 3];
  //     const maior = buscaMaiorValor(lista);
  //     expect(maior).toBe(8);
  //   });
  // });
});
