//entendendo mais sobre funções e atributo prototype

function MeuObjeto() {};
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === MeuObjeto.prototype);
console.log(obj1.__proto__ === obj2.__proto__);
//quando criamos um objeto utilizando uma função construtora o __proto__ desse objeto aponta para o .prototype da função

MeuObjeto.prototype.nome = "Carlos";
MeuObjeto.prototype.falar = function() {
  console.log(`bom dia meu nome é ${this.nome}`);
};
obj1.falar();          

obj2.nome = "herbert";
obj2.falar(); 

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();

//Resumindo tudo até agora 
//um objeto criado com uma função construtora, tem a sua referencia de prototype apontando para o atributo
//prototype da função
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
//uma função construtora tem sua referencia de prototype apontando para function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype);
//a referencia de prototype de function aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype);

