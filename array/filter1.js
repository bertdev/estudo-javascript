//um metodo que serve para percorrer e filtrar um array, obetendo um subarray com base
//em uma regra de filtragem(geralmente o array novo é menor que o base)
//o filter recebe uma callback e passa para ela o elemento, o index e o array

const produtos = [
  { nome: "Notebook", preco: 2400, fragil: true },
  { nome: "iPad pro", preco: 4199, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copod de plastico", preco: 18.99, fragil: false }
];

console.log(produtos.filter(produto => {
  return produto.preco > 2000;
}));

const apenasCaros = produto => produto.preco >= 500;
const apenasFrageis = produto => produto.fragil;

//com a junção dos dois filters iremos filtrar os produtos caros e frageis
let resultado = produtos.filter(apenasCaros).filter(apenasFrageis);
console.log(resultado);

