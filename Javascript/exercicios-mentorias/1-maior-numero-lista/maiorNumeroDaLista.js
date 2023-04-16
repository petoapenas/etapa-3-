function buscaMaiorValor(listaDeNumeros) {
  let maiorNumero = listaDeNumeros[0];

  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] > maiorNumero) {
      maiorNumero = listaDeNumeros[i];
    }
  }
  return maiorNumero;
}

module.exports = { buscaMaiorValor };

const lista = [1, 2, 3, 4, 5, 3, 8, 3];
const maior = buscaMaiorValor(lista);
console.log(`maior número é ${maior}`);
