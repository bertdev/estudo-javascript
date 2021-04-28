function calculadora(operando1, operacao, operando2) {
  switch (operacao) {
    case "+":
      console.log(`${operando1} + ${operando2} = ${operando1 + operando2}`);
      break;
    case "-":
      console.log(`${operando1} - ${operando2} = ${operando1 - operando2}`);
      break;
    case "*":
      console.log(`${operando1} * ${operando2} = ${operando1 * operando2}`);
      break;
    case "/":
      console.log(`${operando1} / ${operando2} = ${operando1 / operando2}`);
      break;
    default:
      console.log(`Operação invalida`);
  };
};

calculadora(3, "+", 3);
calculadora(10, "-", 5);
calculadora(3, "*", 10);
calculadora(4, "/", 2);
calculadora(3, "<", 3);
