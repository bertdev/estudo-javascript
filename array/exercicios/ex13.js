// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

const retornaRegistros = objeto => {
  //return Object.entries(objeto); modo mais pratico
  const restultado = [];
  Object.keys(objeto).forEach(key => {
    restultado.push([key, objeto[key]]);
  });
  return restultado;
  //terceira forma
  //const resultado = Object.keys(objeto).map(key => [key, objeto[key]]);
  //return resultado;
};

console.log(retornaRegistros({a: 4, b: 6}));
