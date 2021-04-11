//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
//a chamada a baixo retornara NaN pois passando só um parametro o b ficará com o valor
//undefined e o resultado da soma entre um number e undefined é NaN
imprimirSoma(2);
//na chamada a baixo os dois primeiros parametros serão recebidos, os outros serão ignorados
imprimirSoma(2, 3, 34, 6, 6);
//na chamada a baixo os dois parametros serão undefined e a soma dos dois será NaN
imprimirSoma();

//função com retorno
function somar(a, b = 1) {
  //parametro b tem um valor padrão 1 quando não receber valor na chamada da função
  return a + b;
}

console.log(somar(2, 3));
console.log(somar(2));
