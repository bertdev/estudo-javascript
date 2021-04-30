//criar duas funções que recebem 2 parametros, um vetor de valores numericos e um numero inteiro,
//a primeira função deve retornar um vetor que será o resultado da multiplicação de cada elemento passado
//pelo numero de parametro, a segunda fara o mesmo que a primeira mas so com valores maiores que 5;

const multiplicaVetor = (vetorBase, multiplicador) => {
  return vetorBase.map(element => element * multiplicador);
};

const multiplicaVetorMaiorCinco = (vetorBase, multiplicador) => {
  return vetorBase.map(element => element > 5 ? element * multiplicador : element);
};

console.log(multiplicaVetor([1, 4, 3, 5], 10));
console.log(multiplicaVetorMaiorCinco([1, 4, 3, 6, 8], 10));