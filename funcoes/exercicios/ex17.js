//criar uma função que calcula quanto de amento um funcionario irá receber

function calculaAumento(planoTrabalho, salario) {
  switch (planoTrabalho) {
    case "a":
      salario += (salario * 0.10);
      console.log(`o seu novo salário será: R$${salario.toFixed(2)}`);
      break;
    case "b":
      salario += (salario * 0.15);
      console.log(`o seu novo salário será: R$${salario.toFixed(2)}`);;
      break;
    case "c":
      salario += (salario * 0.20);
      console.log(`o se novo salário será: R$${salario.toFixed(2)}`);
      break;
    default:
      console.log(`Plano de trabalho invalido`);
  };
};

calculaAumento("a", 1000);
calculaAumento("b", 1000);
calculaAumento("c", 1000);
calculaAumento("d", 1000);
