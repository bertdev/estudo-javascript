//entendendo mais um pouco do exports 

console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);
//mesmo exports recebendo nulo as outras variaveis continuam apontando para o mesmo objeto
//exports assim como as outras variaveis somente recebeia a referencia do endereco de memoria 
//no final, só quem é exportado é o module.exports 

exports = {
  nome: "teste"
};

console.log(module.exports);

//a forma correta de exportar algo é assim:
module.exports = { publico: true };

