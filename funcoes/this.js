//this é uma forma de referenciar o objeto atual na execução
//faz referencia ao contexto atual de execução 
//exemplo: o this dentro de uma função faz referencia ao contexto dessa função 
//no js o this pode variar um pouco dependendo da forma da função

function fun1() {
  //nesse contexto o this está apontando para o objeto global do node
  console.log(this === global);
};

fun1();

//nesse contexto o this está apontando para o module.exports e não para o global 
console.log(this === global);
console.log(this === module.exports);

//o this de uma arrow function aponta pra module.exports 
//que é o objeto global de um arquivo node, em uma função arrow o this nunca varia
//ele pega o this com base no contexto em que a arrow é declarada, chamamos isso de this lexico
const fun2 = () => console.log(this === module.exports);
fun2();