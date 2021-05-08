// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const calculaDespesas = produtos => {
  return produtos.map(getPrecos).reduce(soma);
};
const getPrecos = produto => produto.preco;
const soma = (acumulador, atual) => acumulador + atual;


console.log(calculaDespesas([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]));
