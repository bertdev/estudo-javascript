// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(repetidor, qtdRepeticao) {
  const newArray = [];
  for (let i = 0; i < qtdRepeticao; i++) {
    newArray.push(repetidor);
  };
  return newArray;
};

console.log(repetir(7, 3));
