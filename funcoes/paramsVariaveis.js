//receber uma quantidade variavel de parametros sem utilizar o rest/spread operator
function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  };
  return soma;
};

console.log(soma(0));
console.log(soma(5,2,3));
console.log(soma(1));
console.log(soma());
console.log(soma("a","b","c"));

//arguments é um array que a função possui que armazena os seus parametros
//uma arrow function não possui a propriedade arguments