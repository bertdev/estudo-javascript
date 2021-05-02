// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = "Cadeira";
produto["marca do produto"] = "Generiaca";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
		nome: "Raul",
		idade: 44,
		endereco: {
		  logradouro: "ABC",
		  numero: 69
		}
  },
  condutores:[{
	  nome: "thiago",
		idade: 23
	},{
		nome: "ana",
		idade: 45
	}],
  calculaValorSeguro: function() {
		//...
	},
};

carro.proprietario.endereco.numero = 99;
console.log(carro);

delete carro.condutores;
delete carro.proprietario;
console.log(carro);

