//percorrer um vetor e contar quantos numeros estão entre 10 e 20, incluindo os mesmos

const calculaNumerosNoIntervalo = numeros => {
  let qtdNumerosNoIntervalo = 0;
  numeros.forEach(numero => {
    if(numero >= 10 && numero <= 20) {
      qtdNumerosNoIntervalo++;
    };
  });
  
  return `Nesse vetor existem ${qtdNumerosNoIntervalo} números no intervalo entre 10 e 20`;
};

console.log(calculaNumerosNoIntervalo([10,11,3,4,15]));