// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

const retornaParesComIndicesImpares = arrayBase => {
  const resultado = arrayBase.filter(apenasParesComIndiceImpar);
  return resultado;
};

const apenasParesComIndiceImpar = (valor, indice) => valor % 2 == 0 && indice % 2 != 0;

console.log(retornaParesComIndicesImpares([1, 2, 3, 4, 5, 7]));
