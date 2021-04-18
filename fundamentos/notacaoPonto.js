//Notação ponto permite que acessemos métodos pertecentes a objetos
console.log(Math.ceil(6.1));

//nos permite criar ou acessar um atributo(propriedade) de um objeto
const obj1 = {};
obj1.nome = "teste";
console.log(obj1.nome);

function Obj(nome, preco) {
  this.nome = nome;
  this.preco = preco;
  this.exibePreco = function() {
    console.log(`o preco da ${nome} é de R$${preco}`);
  };
};

const obj2 = new Obj("cadeira", 20);
const obj3 = new Obj("mesa", 30);
console.log(obj2.nome);
obj2.exibePreco();
console.log(obj3.nome);
obj3.exibePreco();