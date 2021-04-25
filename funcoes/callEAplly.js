//mais outras formas de chamar uma função

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
};

const produto = {
  nome: "Notebook",
  preco: 5988,
  desc: 0.10,
  getPreco
};

//chamando função diretamente e através de objeto
console.log(getPreco());
console.log(produto.getPreco());

const carro = {
  preco: 5988,
  desc: 0.10,
}

//chamada de função com call e apply, o objeto passado será usado como this
//call recebe os parametros: (this/contexto: objeto, resto dos params que a função etá esperando)
console.log(getPreco.call(carro)); 
//apply recebe os parametro: (this/contexto: objeto, e um array com os paramtros que a função espera)
console.log(getPreco.apply(carro));