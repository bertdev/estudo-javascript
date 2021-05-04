//entendendo mais sobre funções e atributo prototype

function MeuObjeto() {};
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === MeuObjeto.prototype);
console.log(obj1.__proto__ === obj2.__proto__);

MeuObjeto.prototype.nome = "Carlos";
MeuObjeto.prototype.falar = () => {
  console.log(`bom dia meu nome é ${this.nome}`);
};
obj1.falar();          

