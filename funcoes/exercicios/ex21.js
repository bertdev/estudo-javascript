//criar um programa que identifica o valor a ser pago por um plano de saude
//com base na idade do conveniado, todos pagam 100 somado a um adicional segundo
//1) crianças com menos de 10 anos pagam 80
//2)entre 10 e 30 pagam 50
//3)acima de 30 e menor que 60 paga 95
//4)acima de 60 pagam 130

const calculaPreco = idadeConveniado => {
  let precoPlano = 100;
  let tipoPlano = verificaTipoPlano(idadeConveniado);

  switch (tipoPlano) {
    case 1:
      precoPlano += 80;
      break;
    case 2:
      precoPlano += 50;
      break;
    case 3:
      precoPlano += 95;
      break;
    case 4:
      precoPlano += 130;
      break;
  };

  return precoPlano;
};

const verificaTipoPlano = idadeConveniado => {
  if(idadeConveniado < 10) {
    return 1;
  } else if(idadeConveniado >= 10 && idadeConveniado < 30) {
    return 2;
  } else if(idadeConveniado >= 30 && idadeConveniado < 60) {
    return 3;
  } else if(idadeConveniado >= 60) {
    return 4;
  };
};

console.log(calculaPreco(1));
console.log(calculaPreco(11));
console.log(calculaPreco(55));
console.log(calculaPreco(99));
