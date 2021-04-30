//uma função que recebe um valor e calcula como entregar a menor quantidade de cédulas

const sacarDinheiro = valorSaque => {
  let contador100 = 0;
  let contador50 = 0;
  let contador10 = 0;
  let contador5 = 0;
  let contador1 = 0;
  let valorNota = calculaNota(valorSaque);

  while (valorSaque >= valorNota) {
    switch (valorNota) {
      case 100:
        contador100++;
        valorSaque -= 100;
        break;
      case 50:
        contador50++;
        valorSaque -= 50;
        break;
      case 10:
        contador10++;
        valorSaque -= 10;
        break;
      case 5:
        contador5++;
        valorSaque -= 5;
        break;
      case 1:
        contador1++;
        valorSaque -= 1;
        break;
    };

    valorNota = calculaNota(valorSaque);
  };

  return formataResultado(contador1, contador5, contador10, contador50, contador100);
};

const calculaNota = valorSaque => {
  //calcula a nota atual para fatoração do valor de valorSaque
  if (valorSaque >= 100) {
    return 100;
  } else if (valorSaque >= 50) {
    return 50;
  } else if (valorSaque >= 10) {
    return 10;
  } else if (valorSaque >= 5) {
    return 5;
  } else if (valorSaque >= 1) {
    return 1;
  }
};

const formataResultado = (contador1, contador5, contador10, contador50, contador100) => {
  //formata a mensagem de formataResultado
  let resultado = "";
  if (contador100 > 0) {
    resultado +=`${contador100} nota(s) de R$100,00 `;
  };
  if (contador50 > 0) {
    resultado +=`${contador50} nota(s) de R$50,00 `;
  };
  if (contador10 > 0) {
    resultado +=`${contador10} nota(s) de R$10,00 `;
  };
  if (contador5 > 0) {
    resultado +=`${contador5} nota(s) de R$5,00 `;
  };
  if (contador1 > 0) {
    resultado +=`${contador1} nota(s) de R$1,00 `;
  };

  return resultado;
};

console.log(sacarDinheiro(160));
