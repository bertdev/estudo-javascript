//implementando meu proprio filter 

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad pro", preco: 4500, fragil: true },
  { nome: "Copo de vidro", preco: 12.49, fragil: true },
  { nome: "Copod de plástico", preco: 18.99, fragil: false }
];

Array.prototype.filtrar = function(callback) {
  const newArray = [];
	for(let i = 0; i < this.length; i++) {
		if(callback(this[i], i, this)) {
				newArray.push(this[i]);
		};
	};
  return newArray;
};

const apenasCaro = produto => produto.preco >= 500;
const apenasFragil = produto => produto.fragil;

console.log(produtos.filtrar(apenasCaro).filtrar(apenasFragil));

