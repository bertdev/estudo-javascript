//é qualquer função que retrona um objeto(não contando função construtora ou class)
//sem o uso do operador new

function criarProduto(nome, preco, peso) {
  return {
    nome: nome,
    preco: preco,
    peso: `${peso}g`,
    desconto: 0.10
  };
};

const prod1 = criarProduto("Celular muito bom", 888, 300);

console.log(prod1);