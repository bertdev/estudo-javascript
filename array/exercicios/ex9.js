// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro

function simboloMais(qtdSimbolos) {
  let simbolos = "";
  for (let i = 0; i < qtdSimbolos; i++) {
    simbolos += "+";
  };
  return simbolos;
};

console.log(simboloMais(4));
console.log(simboloMais(3));
console.log(simboloMais(2));
console.log(simboloMais(1));
