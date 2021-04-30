//criar 3 arrays diferentes, contendo inteiros, strings, e decimais
//criar uma função que une eles usansdo concat e mostrar o resultado

const vetorInt = [10, 20, 30, 40];
const vetorStirng = ["Herbert", "Sei lá", "Js é bom", "FP melhor que OOP"];
const vetorDouble = [1.4, 3.5, 10.34, 4.56];

function concatena(...params) {
  let resultado = [];
  for(let i = 0; i < params.length; i++) {
    resultado = resultado.concat(params[i]);
  };
  console.log(resultado);
};

concatena(vetorDouble, vetorInt);
concatena(vetorStirng, vetorInt);
concatena(vetorInt, vetorDouble, vetorStirng);