// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function primeiroEUltimoElemento(elementos) {
  const newArray = [];
  newArray.push(elementos[0]);
  newArray.push(elementos[elementos.length - 1]);
  return newArray;
};

console.log(primeiroEUltimoElemento([10, "0pa", true]));
