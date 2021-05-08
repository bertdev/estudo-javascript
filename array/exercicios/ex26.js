// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

const segundoMaior = array => {
  let novoArray = array.filter(numero => {
    if(Math.max(...array) == numero) {
      return false;
    }
    return true;
  });
  return Math.max(...novoArray);
};

console.log(segundoMaior([12, 16, 1, 5]));
