//revisão de formas diferentes de ciarmos objetos

//notação literal
const obj1 = {
  nome: "Opa",
  seila: "realmente não sei"
};
console.log(obj1);

//Object em js
console.log(typeof Object);
console.log(typeof new Object);
const obj2 = new Object;
console.log(obj2);

//funções construtoras 
function Produto(nome, preco) {
  this.nome = nome;//este atributo está publico, visivel fora da function
  //criando um metodo(função) publica 
  this.getPreco = () => {
	  return preco;
	};
  //o atributo preco não pode ser manipulado de fora do objeto, ao contrario do nome
};

const prod1 = new Produto("Celular", 1500);
console.log(prod1);
prod1.nome = "notebook";
console.log(prod1.nome);
console.log(prod1.getPreco());

//função factory
function criarFuncionario(nome, salario) {
  return {
		nome, 
		salario,
		getSalario() {
		  return salario;
		}
	};
};

const fun1 = criarFuncionario("João", 4000);
console.log(fun1);
console.log(fun1.getSalario());

//Object create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);
