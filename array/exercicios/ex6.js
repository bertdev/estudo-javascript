// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.

const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
  if(inclusivo) {
    return numero >= minimo && numero <= maximo;
  } else {
    return numero > minimo && numero < maximo;
  };
};

console.log(estaEntre(10, 10, 50, true));
console.log(estaEntre(1, 1, 10));
console.log(estaEntre(15, 10, 50));
