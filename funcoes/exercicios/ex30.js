//percorrer um vetor de inteiros e definir o maior e menor valor 

const verificaMaiorMenorValor = numeros => {
  numeros.sort((a, b) => a > b ? 1 : -1);
  return `O maior numero é ${numeros[numeros.length - 1]} e o menor numero é ${numeros[0]}`;
};

console.log(verificaMaiorMenorValor([10, 11, 3, 5, 44]));