//calcula a media aritmética dos valores de um vetor de inteiros

const caculaMedia = numeros => {
  let somatoriaNumeros = 0;
  numeros.forEach(numero => somatoriaNumeros += numero);
  let media = somatoriaNumeros / numeros.length;
  
  console.log(`a média aritmética desse vetor é: ${media.toFixed(2)}`);
};

caculaMedia([10, 30, 48, 32]);