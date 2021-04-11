//armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

//armazenando uma arrow function em uma variavel
const somar = (a, b) => {
  return a + b;
};

console.log(somar(2, 3));

//retorno implicito
const subtrair = (a, b) => a - b;

console.log(subtrair(2, 3));
