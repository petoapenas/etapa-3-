const lista = ["a", 1, "Floripa", "Banana", 4.5, 99];

console.log(lista.length);

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
console.log(`o segundo item é ${lista[2]}`);

// o segundo item é 'Floripa'

const matriz = [
  [10, 20, 30, 40],
  ["A", "B", "C", "D"],
  ["X", "Y", "Z", "W"],
];
console.log(matriz[1][3]);

for(let i = 0; i < 3; i++){
  for(let j = 0; j < 4; j++){
    console.log(matriz[i][j])
  }
}
