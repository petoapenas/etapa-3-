# Lista de compras

Crie um programa que crie uma lista de compras e retorne o total gasto.

## Requisitos

- O programa deve receber um array de objetos com os seguintes atributos:
  - `nome`: Nome do produto
  - `preco`: Preço do produto
  - `quantidade`: Quantidade do produto

- O programa deve retornar o total gasto na lista de compras

Exemplo de entrada::
```js
[
  {
    nome: 'Arroz',
    preco: 10.00,
    quantidade: 2
  },
  {
    nome: 'Feijão',
    preco: 5.00,
    quantidade: 1
  },
  {
    nome: 'Macarrão',
    preco: 4.00,
    quantidade: 3
  }
]
```

Saída esperada:
```
Produtos: Arroz, Feijão, Macarrão
Total gasto: R$ 37
Custo médio por produto: R$ 12.33
```

Explicação:
```
Arroz: R$ 10.00 * 2 = R$ 20
Feijão: R$ 5 * 1 = R$ 5
Macarrão: R$ 4 * 3 = R$ 12
R$ 20 + R$ 5 + R$ 12 = R$ 37
```
