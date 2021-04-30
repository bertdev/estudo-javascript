//ler um vetor de numeros inteiros e imprimir quantos são pares e quantos são inpares

function calculaParEImpar(numeros) {
  let qtdImpar = 0;
  let qtdPar = 0;
  numeros.forEach(numero => numero % 2 == 0 ? qtdPar++ : qtdImpar++ );
  
  return `Nesse vetor existem: ${qtdImpar} números impares e ${qtdPar} números pares`;
};

console.log(calculaParEImpar([1,2,3,4,5,6,7,8,9,10]));