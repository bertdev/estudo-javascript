//entendendo o que acontece quando usamos o operador new

function Aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
};

const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até Breve", 456);
console.log(aula1, aula2);

//simulando o new

function novo(fun, ...params) {
  const obj = {};//cria um objeto
  obj.__proto__ = fun.prototype;//aponta o prototype para a função
  fun.apply(obj, params);//executa a função usanso obj como this 
  return obj;
};

const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);
console.log(aula3, aula4);
