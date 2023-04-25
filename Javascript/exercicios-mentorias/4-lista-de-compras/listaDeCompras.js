let listaDecompras = [
  {
    nome: "Arroz",
    preco: 10.0,
    quantidade: 2,
  },
  {
    nome: "Feijão",
    preco: 5.0,
    quantidade: 1,
  },
  {
    nome: "Macarrão",
    preco: 4.0,
    quantidade: 3,
  },
];

//console.log(listaDecompras[0].quantidade)

var totalGasto = 0;
var todosProdutos = "";
for (let i = 0; i < listaDecompras.length; i++) {
  var preco = listaDecompras[i].preco;
  var quantidade = listaDecompras[i].quantidade;
  var produto = listaDecompras[i].nome;
  var totalDoItem = preco * quantidade;
  totalGasto = totalGasto + totalDoItem;
  todosProdutos = todosProdutos + produto + " ";
  // console.log(`o total gasto com ${produto} foi R$ ${totalDoItem}`);
}
console.log(`Total gasto foi: R$ ${totalGasto}`);

var media = totalGasto / listaDecompras.length;

console.log(`Custo médio por produto: R$ ${media}`);
console.log(`Produtos: ${todosProdutos}`);
