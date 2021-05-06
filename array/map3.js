//implementando meu próprio map

const carrinho = [
  '{ "nome": "borracha", "preco": 3.50 }',
  '{ "nome": "caderno", "preco": 13.90 }',
  '{ "nome": "kit de lapis", "preco": 41.22 }',
  '{ "nome": "caneta", "preco": 7.50 }'
];

Array.prototype.mapear = function(callback) {
  let resultado = [];
  for(let i = 0; i < this.length; i++) {
	  resultado.push(callback(this[i], i, this));
	};
  return resultado;
};

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

let resultado = carrinho.mapear(paraObjeto).mapear(apenasPreco);
console.log(resultado);

