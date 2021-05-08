// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const somaArray = arrayBase => {
  return arrayBase.reduce(soma);
};
const soma = (acumulador, atual) => acumulador + atual;

console.log(somaArray([10, 20, 20]));
