# PAQ Mentoria Etapa 3

O objetivo deste repositório é servir como complemento aos exercícios dos cursos da Alura (Peto) e de Java (Davi).

Os conteúdos estão divididos em pastas, e cada pasta de conteúdo é dividida entre assuntos daquele contexto.

Exemplo:
- `JavaScript`: Pasta sobre o conteúdo de JavaScript
  - `Funcoes`: Pasta sobre funções em JavaScript
  - etc
- `Java`: exercícios sobre Java
  - `ConsumoCombustivel`: Exercício sobre consumo de combustível

## Configuração do GIT local

Para configurar o seu usuário no repositório local, execute os seguintes comandos no terminal:

```bash
git config --local user.name "<seu_nome>"
git config --local user.email "<seu_email>"
```

Alterando `<seu_nome>` e `<seu_email>` pelos seus dados.

Caso ocorra o erro `fatal: refusing to merge unrelated histories`, execute o seguinte comando:

```bash
git pull origin main --allow-unrelated-histories
```
