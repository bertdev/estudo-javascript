//Praticando, retornar um array só com os precos usando maps

const carrinho = [
  '{ "nome": "borracha", "preco": 3.45 }',
  '{ "nome": "caderno", "preco": 13.90 }',
  '{ "nome": "kit de lapis", "preco": 41.22 }',
  '{ "nome": "caneta", "preco": 7.50 }'
];

const paraObj = element => JSON.parse(element);
const apenasPrecos = element => element.preco;

let resultados = carrinho.map(paraObj).map(apenasPrecos);
console.log(resultados);

